import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({ headers: req.headers.set('dbMotion', '1234') });
    return next.handle(clonedRequest);
  }
}
