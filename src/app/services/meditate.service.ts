import { DoCheck, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __asyncDelegator } from 'tslib';
interface IStep {
  step: number,
  name: string,
  completed: boolean
}
@Injectable({
  providedIn: 'root'
})
export class MeditateService implements DoCheck{
  step = 0
  nbStep = 4

  time = new FormControl("", {validators: [Validators.max(1000)] })
  mentor = new FormControl
  challenges= new FormControl
  goals= new FormControl
  isSubmitted = false
  registerForm = new FormGroup({
    time: this.time,
    mentor: this.mentor,
    challenges: this.challenges,
    goals: this.goals
  })

  nextStep():void {
    this.step+=1;
  }
  prevStep():void {
    this.step-=1;
  }

  log(formData:FormGroup):void {
    console.log(formData.value)
    this.isSubmitted = true

    setTimeout(()=> {
      this.registerForm.reset()
      this.step=0
      this.isSubmitted=false
    }, 5000)
  }

  ngDoCheck(): void {

  }

  checkIfEmpty():boolean {
    const completedSteps = this.allSteps.filter(step => step.completed)
    console.log(completedSteps)
    if(completedSteps) return false
    else return true
  }

  allSteps:IStep[] = [
    {
      step: 1, 
      name: "Your time",
      completed: this.time.value && this.time.valid?true:false
    },
    {
      step:2, 
      name: "Your mentor",
      completed:  this.mentor.value&&this.mentor.valid?true:false
    },
  
    {
      step:3, 
      name: "Your challenges",
      completed:this.challenges.value && this.challenges.valid?true:false
  
    }
    ]

  constructor() { }
}