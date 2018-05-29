import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {

  private requestsCount : number;
  constructor() {
    this.requestsCount = 0;
  }
  addRequest(){this.requestsCount ++;}

  removeRequest(){this.requestsCount --;}

  showLoadingBar(){
    return this.requestsCount > 0;
  }

}
