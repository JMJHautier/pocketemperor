import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';
import { MeditateService } from 'src/app/services/meditate.service';
import { MentorService } from 'src/app/services/mentor.service';
import { QuotesService } from 'src/app/services/quotes.service';
import { IMentor } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})

export class MentorComponent implements DoCheck {
  @Input() step=''

  constructor(public meditate:MeditateService, public quote:QuotesService, public mentor:MentorService) { 
  
  }
  mentors: IMentor[]= []

  ngDoCheck(): void {
    this.setDesc();
  }


  getQuotes () {
    return firstValueFrom(
      this.quote.getQuotes().pipe(tap((data) => {
        this.quote.selectedQuotes = data
      }))
    )

  
    } 
    getRandomQuote() {
      const random = Math.floor(Math.random()*this.quote.selectedQuotes.length)
      this.quote.randomQuote = this.quote.selectedQuotes[random]
  
    }
  
    async setQuote() {
      await this.getQuotes()
      this.getRandomQuote()
      this.meditate.quoteId.setValue(this.quote.randomQuote.id)

    }
    getMentor():void {
      this.mentor.getMentor().subscribe((data)=> {
        this.mentors = data
        this.shuffle()
      })
    }
    shuffle(): void {
      this.mentors = this.mentors.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
      }

  selectedMentor:IMentor = {
    id:0, 
    img:"",
    name:"",
    legend:"",
    desc:""

  }  

  setDesc():void {
  const filteredMentors =  this.mentors.filter(mentor => mentor.name === this.meditate.mentor.value)
  if(filteredMentors.length) {
    console.log(filteredMentors)
    this.selectedMentor = filteredMentors[0]
  }
  } 

  ngOnInit():void {
    this.getMentor()
  }
}
