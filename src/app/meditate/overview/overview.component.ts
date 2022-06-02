import { Component, OnInit } from '@angular/core';

interface IOverview {
    step: number,
    name: string,
    completed: boolean
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['step', 'name', 'completed'];
  dataSource:IOverview[]= 
  [
  {
    step: 1, 
    name: "Your time",
    completed: false
  },
  {
    step:2, 
    name: "Your mentor",
    completed:false
  },

  {
    step:3, 
    name: "Your challenges",
    completed:false

  }
  ]

  ngOnInit(): void {
  }

}
