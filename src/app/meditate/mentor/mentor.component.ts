import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { MeditateService } from 'src/app/services/meditate.service';
interface IMentor {
  id:number,
  img: string,
  name: string,
  legend: string,
  desc: string
}
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})

export class MentorComponent implements DoCheck {
  @Input() step=''
  constructor(public meditate:MeditateService, ) { 
  
  }

  ngDoCheck(): void {
    this.setDesc();
  }
  mentors: IMentor[]= [{
    id:1, 
    img:"../../assets/marcus.jpg",
    name:"Marcus Aurelius",
    legend:"Stoïcist and emperor",
    desc:"the last of the rulers known as the Five Good Emperors (a term coined some 13 centuries later by Niccolò Machiavelli), and the last emperor of the Pax Romana, an age of relative peace and stability for the Roman Empire lasting from 27 BC to 180 AD. He served as Roman consul in 140, 145, and 161. "

  },
  {
    id:2, 
    img:"../../assets/curie.bmp",
    name:"Marie Curie",
    legend:"Scientist and feminist",
    desc:"Marie Salomea Skłodowska–Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields. Her husband, Pierre Curie, was a co-winner on her first Nobel Prize, making them the first ever married couple to win the Nobel Prize and launching the Curie family legacy of five Nobel Prizes. She was, in 1906, the first woman to become a professor at the University of Paris.[4]"

  },
  {
    id:3, 
    img:"../../assets/ghandi.bmp",
    name:"Mahatma Ghandi",
    legend:"Leader and pacifist",
    desc:"Mohandas Karamchand Gandhi was an Indian lawyer,[4] anti-colonial nationalist[5] and political ethicist[6] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule,[7] and to later inspire movements for civil rights and freedom across the world. The honorific Mahātmā , first applied to him in 1914 in South Africa, is now used throughout the world."

  }
]
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
}
