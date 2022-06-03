import { Component, Input, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent implements OnInit {
@Input() step=''
  constructor(public meditate:MeditateService) { }

  ngOnInit(): void {
  }

}
