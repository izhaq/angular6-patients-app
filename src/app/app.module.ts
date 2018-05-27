import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patient/patient.component';

import { AgeInYearsPipe } from './services/age.pipe';
import { GenderPipe } from './services/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    AgeInYearsPipe,
    GenderPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
