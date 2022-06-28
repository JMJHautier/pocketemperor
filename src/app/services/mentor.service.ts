import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IMentor } from '../shared/interfaces';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(public http:HttpClient) { }

  getMentor ():Observable<IMentor[]> {
    const request = this.http.get<IMentor[]>('http://localhost:8000/mentor')

    return request.pipe(catchError(this.handleError<IMentor[]>('getQuotes', [])))
  }
  handleError<T> (operation='operation', result?:T) {
    return (error:any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }

  }
}
