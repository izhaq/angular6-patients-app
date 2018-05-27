import { Injectable } from '@angular/core';
import {PATIENTS} from './mock-patients';
import {Patient} from './patient';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patients: Patient[];

  constructor() { }

  getPatients(): Observable<Patient[]> {
    //this.patients = PATIENTS;
    return of(PATIENTS);
  }
}
