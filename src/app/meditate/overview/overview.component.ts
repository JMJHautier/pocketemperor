import { Component, DoCheck, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements DoCheck {

  constructor(public meditate:MeditateService) { }
  displayedColumns: string[] = ['step', 'name', 'completed'];
  dataSource = this.meditate.allSteps
  showOutcome = this.meditate.isSubmitted
  setDataSource():void {
    this.dataSource= this.meditate.allSteps
    console.log(this.meditate.allSteps)
  }
  ngDoCheck(): void {
    this.dataSource= this.meditate.allSteps
    this.showOutcome = this.meditate.isSubmitted

  }

}
