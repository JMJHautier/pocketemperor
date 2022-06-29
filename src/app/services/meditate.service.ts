import { DoCheck, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __asyncDelegator } from 'tslib';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeditation } from '../shared/interfaces';
interface IStep {
  step: number,
  name: string,
  completed: () => boolean
}
@Injectable({
  providedIn: 'root'
})
export class MeditateService implements DoCheck{
  constructor(private router:Router, public http:HttpClient) { }

  //! steps 
  step = 0
  nbStep = 5
  nextStep():void {
    this.step+=1;
    const url = `/meditate/${this.step}`
    this.router.navigateByUrl(url)
  }
  prevStep():void {
    this.step-=1;
    const url = `/meditate/${this.step}`

    if(this.step === 0) this.router.navigateByUrl('/meditate')
    else this.router.navigateByUrl(url)

  }

  //! form
  time = new FormControl("", {validators: [Validators.max(1000)] })
  mentor = new FormControl
  challenges= new FormControl
  goals= new FormControl
  quote = new FormControl
  quoteId= new FormControl
  registerForm = new FormGroup({
    time: this.time,
    mentor: this.mentor,
    challenges: this.challenges,
    goals: this.goals,
    quote: this.quote, 
    quoteId: this.quoteId
  })
  isSubmitted = false


  log(formData:FormGroup):void {
    console.log(formData.value)

    this.http.post('http://localhost:8000/meditation', formData.value).subscribe((data)=> console.log(data))

    setTimeout(()=> {
      this.registerForm.reset()
      this.step=0
      this.isSubmitted=false
    }, 5000)
  }

  getMeditations():Observable<IMeditation[]>{
    
    return this.http.get<IMeditation[]>('http://localhost:8000/meditation') 
  }

  //! overview table
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
      completed: () => this.time.value && this.time.valid
    },
    {
      step:2, 
      name: "Your mentor",
      completed:  () => this.mentor.value && this.mentor.valid
    },
  
    {
      step:3, 
      name: "Your challenges",
      completed:() => this.challenges.value && this.challenges.valid
  
    }, 
    {
      step:4, 
      name:"Reflection",
      completed: () => this.challenges.value && this.quote.valid
    }
    ]

  ngDoCheck(): void {

  }
}
