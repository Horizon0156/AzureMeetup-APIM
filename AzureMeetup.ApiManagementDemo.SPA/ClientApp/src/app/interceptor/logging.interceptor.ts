import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private readonly _snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(tap(
        () => { },
        error => this.logError(error)));
  }

  private logError(error: any): void {

    if (error instanceof HttpErrorResponse) {

      this._snackBar.open(error.message, "Dismiss");
    }
    else {
      this._snackBar.open("An unknown error occured. Please have a log in the console.", "Dismiss");
    }
  }
}
