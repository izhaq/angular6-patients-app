import { Injectable } from '@angular/core';
import {PATIENTS} from './mock-patients';
import {Patient} from "./patient";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Patient[];
  constructor() { }
  getPatients() {
    this.patients = PATIENTS;
    return this.patients;
  }
}
