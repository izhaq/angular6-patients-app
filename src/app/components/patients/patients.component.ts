import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../services/app-http.service';
import {Patient} from '../../services/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];
  constructor(private appHttpService: AppHttpService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.appHttpService.getPatients()
      .subscribe((Patients) => {
        this.patients = Patients
      });
  }

  handleHover(id, $event){
    this.appHttpService.addFeedback(id).subscribe((feedback) => {
      console.log(feedback);
    });
  }
}
