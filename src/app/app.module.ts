import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
/*import { NgHttpLoaderModule } from 'ng-http-loader';*/
import {ProgressBarModule} from 'primeng/progressbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';

import { AgeInYearsPipe } from './pipes/age.pipe';
import { GenderPipe } from './pipes/gender.pipe';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-server/in-memory-data.service';
import {HeaderInterceptor} from './services/header-interceptor.service'
import {LoadingBarInterceptor} from './services/loading-bar-interceptor.service'

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
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 8000 }
    ),
   /* NgHttpLoaderModule,*/
    ProgressBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
