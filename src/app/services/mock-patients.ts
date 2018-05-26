import { Patient } from './patient';

export const PATIENTS: Patient[] = [
  {
    dateOfBirth: '05/01/2000',
    mrn: '12345678-9',
    firstName: 'Andrew',
    lastName: 'Johnson',
    gender: 'Male',
    comment: 'Prof Colin Garner, from Antibiotic Research UK, ' +
    'said finding new antibiotics to treat gram-positive infections ' +
    'like MRSA was good news, but would not address the most pressing need.'
  },
  {
    dateOfBirth: '01/05/1975',
    mrn: '12345555-9',
    firstName: 'Donald',
    lastName: 'Tramp',
    gender: 'Male',
    comment: 'Soil is teeming with millions of different micro-organisms that ' +
    'produce lots of potentially therapeutic compounds, including new antibiotics.' +
    'Our concern are the so called gram-negative bacteria which are difficult to treat ' +
    'and where resistance is on the increase'
  },
  {
    dateOfBirth: '05/18/2017',
    mrn: '12346666-9',
    firstName: 'Missy',
    lastName: 'Jason',
    gender: 'Female',
    comment: 'Gram-negative bacteria cause pneumonia, blood and urinary tract ' +
    'infections as skin infections. We need new antibiotics to treat this class.' +
    'They used a gene sequencing technique to analyse more than 1,000 soil samples ' +
    'taken from across the US.'
  },
];
