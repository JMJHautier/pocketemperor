export interface IQuote  {
  id:number,
  mentor: string, 
  text: string
}

export interface IMentor {
  id:number,
  img: string,
  name: string,
  legend: string,
  desc: string
}

export interface IMeditation {
  time?: string, 
  challenges?: string,
  goals?: string,
  mentor?: string, 
  quote?:string
}