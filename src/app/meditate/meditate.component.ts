import { Component, OnInit } from '@angular/core';
import { MeditateService } from '../services/meditate.service';

@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.component.html',
  styleUrls: ['./meditate.component.scss']
})
export class MeditateComponent implements OnInit {


  constructor(public meditate:MeditateService) { }
  registerForm = this.meditate.registerForm
  
  ngOnInit(): void {
  }

}
