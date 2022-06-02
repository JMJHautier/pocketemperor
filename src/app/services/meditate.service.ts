import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeditateService {
  step = 0
  nbStep = 4

  nextStep():void {
    this.step+=1;
  }
  prevStep():void {
    this.step-=1;
  }
  constructor() { }
}
