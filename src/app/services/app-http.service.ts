import { Injectable } from '@angular/core';
import {Patient} from './patient';
import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Feedback} from './feedback'

const httpOptions = {
  headers: new HttpHeaders({'disableLoadingBar': 'true'})
};

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private patientsUrl = 'api/patients';  // URL to web api
  private feedbackUrl = 'api/feedback';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
  }

  addFeedback (id: string): Observable<Feedback> {
    console.log("bla")
    return this.http.post<Feedback>(this.feedbackUrl, {id: id}, httpOptions).pipe(
      tap((feedback: Feedback) => console.log(`added hero w/ id=${feedback}`))
    );
  }
}
