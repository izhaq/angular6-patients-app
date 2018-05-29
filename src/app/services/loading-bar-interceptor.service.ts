import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {LoadingBarService} from './loading-bar.service'

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
  constructor(private loadingBarService: LoadingBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingBarService.addRequest();

    const handleObs: Observable<HttpEvent<any>> = next.handle(req);

    return handleObs.pipe(tap(()=> {
      console.log('b');
      this.loadingBarService.removeRequest();
    }));
  }
}
