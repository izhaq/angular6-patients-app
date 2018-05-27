import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  @Input('patientInfo')
  private patientInfo: any;

  constructor() { }

  ngOnInit() {
  }

  get patient(): any {
   return this.patientInfo ;
  }

  getAge(date): any {
    return moment().diff(date, 'years');
  }

  getFullName(firstName, lastName): string{
    return firstName + ' ' + lastName;
  }

}
