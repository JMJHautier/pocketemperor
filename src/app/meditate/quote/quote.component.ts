import { Quote } from '@angular/compiler';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';
import { QuotesService } from 'src/app/services/quotes.service';
import { IQuote } from 'src/app/shared/interfaces';
import { MeditateComponent } from '../meditate.component';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnChanges {

  constructor(public quote:QuotesService, public meditate: MeditateService) { }


 
  ngOnInit(): void {
  }
  ngOnChanges(): void {

  }
  ngDoCheck():void {

  }
  ngAfterContentInit():void {
  }
}
