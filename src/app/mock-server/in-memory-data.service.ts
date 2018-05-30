import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Patient} from './../services/patient';
import {Feedback} from './../services/feedback';

export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    const patients: Array<Patient> = [{
      "dateOfBirth": "05/01/2000",
      "mrn": "12345678-9",
      "firstName": "Andrew",
      "lastName": "Johnson",
      "gender": "Male",
      "comment": "Prof Colin Garner, from Antibiotic Research UK, said finding new antibiotics to treat gram-positive infections like MRSA was good news, but would not address the most pressing need."
    },
      {
        "dateOfBirth": "01/05/1975",
        "mrn": "12345555-9",
        "firstName": "Donald",
        "lastName": "Tramp",
        "gender": "Male",
        "comment": "Soil is teeming with millions of different micro-organisms that produce lots of potentially therapeutic compounds, including new antibiotics.Our concern are the so called gram-negative bacteria which are difficult to treat and where resistance is on the increase"
      },
      {
        "dateOfBirth": "05/18/2017",
        "mrn": "12346666-9",
        "firstName": "Missy",
        "lastName": "Jason",
        "gender": "Female",
        "comment": "Gram-negative bacteria cause pneumonia, blood and urinary tract infections as skin infections. We need new antibiotics to treat this class.They used a gene sequencing technique to analyse more than 1,000 soil samples taken from across the US."
      },
      {
        "dateOfBirth": "05/05/2010",
        "mrn": "12347777-9",
        "firstName": "Ivonka.k.",
        "lastName": "Bartlete",
        "gender": "Female",
        "comment": "When they discovered malacidins in many of the samples, they had a hunch it was an important find. They tested the compound on rats that they had given MRSA and it eliminated the infection in skin wounds."
      },
      {
        "dateOfBirth": "05/05/1975",
        "mrn": "12348888-9",
        "firstName": "Jelyla",
        "lastName": "Fitschgerald",
        "gender": "Female",
        "comment": "The researchers are now working to improve the drug's effectiveness in the hope that it can be developed into a real treatment for people.Dr Brady said: \"It is impossible to say when, or even if, an early stage antibiotic discovery like the malacidins will proceed to the clinic.\""
      }
    ];

    console.log("Log db: ", reqInfo);

    const feedback: Array<Feedback> = [];

    return {patients, feedback};
  }
}
