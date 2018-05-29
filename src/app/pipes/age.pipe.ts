import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'ageInYears'})
export class AgeInYearsPipe implements PipeTransform {
  transform(dateOfBirth: string): string {
    let age = moment().diff(dateOfBirth, 'years');
    return age > 1 ? age + ' Years': age + ' Year'
  }
}
