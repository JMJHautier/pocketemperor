import { Component, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';

@Component({
  selector: 'app-nav-form',
  templateUrl: './nav-form.component.html',
  styleUrls: ['./nav-form.component.scss']
})
export class NavFormComponent implements OnInit {
  isEmpty = this.meditate.checkIfEmpty()

  constructor(public meditate:MeditateService) { }

  ngOnInit(): void {
  }

}
