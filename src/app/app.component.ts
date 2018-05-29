import { Component } from '@angular/core';
import {LoadingBarService} from './services/loading-bar.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private loadingBar : boolean;

  constructor(private loadingBarService: LoadingBarService){
    this.loadingBar = false;
  }

  showLoadingBar(){
    return this.loadingBarService.showLoadingBar();
  }

}
