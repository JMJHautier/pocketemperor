import { Component, OnInit } from '@angular/core';
import { MeditateService } from '../services/meditate.service';
import { IMeditation
 } from '../shared/interfaces';
@Component({
  selector: 'app-reflect',
  templateUrl: './reflect.component.html',
  styleUrls: ['./reflect.component.scss']
})



export class ReflectComponent implements OnInit {

  constructor(public meditate: MeditateService) { }
  dataSource: IMeditation[] = []
  displayedColumns: string[] = ['id', 'time', 'mentor', 'challenges', 'goals', 'quoteId', 'quote'];

  getMeditations():void {
    this.meditate.getMeditations().subscribe((data:IMeditation[])=> {
      this.dataSource = data
    })
  }
  ngOnInit(): void {
    this.getMeditations()
  }

}
