import { Component, Input, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  @Input() step=''
  constructor(public meditate:MeditateService) { }

  ngOnInit(): void {
  }

}
