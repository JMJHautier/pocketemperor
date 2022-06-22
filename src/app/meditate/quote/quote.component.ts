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
  selectedQuotes:IQuote[]= []
  randomQuote:IQuote = {id:0, mentor:'', text:''}

  getQuotes () {
  this.quote.getQuotes().subscribe((data) => {
    this.selectedQuotes = data
  })

  } 
  getRandomQuote() {
    const random = Math.floor(Math.random()*this.selectedQuotes.length)
    console.log(this.selectedQuotes)
    console.log(random)
    console.log(this.selectedQuotes[random])
    this.randomQuote = this.selectedQuotes[random]

  }
  ngOnInit(): void {
    this.getQuotes()
  }
  ngOnChanges(): void {

  }
  ngDoCheck():void {
    if(this.meditate.quote.untouched)
    console.log({
      untouched: this.meditate.quote.untouched,
      dirty: this.meditate.quote.dirty,
    })
      this.getRandomQuote()

  }
  ngAfterContentInit():void {
  }
}
