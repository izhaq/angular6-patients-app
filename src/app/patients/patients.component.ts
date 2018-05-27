import { Component, OnInit } from '@angular/core';
import { PatientsService } from './../services/patients.service';
import {Patient} from './../services/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];
  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.patientsService.getPatients()
      .subscribe((Patients) => {
        this.patients = Patients
      });
  }
}
