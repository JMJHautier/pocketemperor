import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map, mergeMap,filter, mergeAll } from 'rxjs';
import { IQuote } from '../shared/interfaces';
import { MeditateService } from './meditate.service';


@Injectable({
  providedIn: 'root'
})


export class QuotesService {

  constructor(public http:HttpClient, public meditate:MeditateService) { }
  quotes = this.http.get("http://localhost:8000")
  
  getQuotes ():Observable<IQuote[]> {
      const request = this.http.get<IQuote[]> ("http://localhost:8000/")
    return request.pipe(catchError(this.handleError<IQuote[]>('getQuotes', [])), 
    map(quote => quote.filter(quote => quote.mentor === this.meditate.mentor.value)))
  }

  handleError<T> (operation='operation', result?:T) {
    return (error:any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }

  }


  selectedQuotes:IQuote[]= []
  randomQuote:IQuote = {id:0, mentor:'', text:''}
}
