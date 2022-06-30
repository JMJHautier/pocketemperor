import { Component, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(public meditate:MeditateService) { }

  ngOnInit(): void {
  }

}
