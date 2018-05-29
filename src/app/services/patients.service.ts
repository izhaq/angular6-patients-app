import { Injectable } from '@angular/core';
import {Patient} from './patient';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patientsUrl = 'api/patients';  // URL to web api

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
  }
}
