import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private _refreshSource: Subject<void> = new Subject();

  public notifyRefresh(): void {

    this._refreshSource.next();
  }

  public subscribeToRefresh(): Observable<void> {
    
    return this._refreshSource.asObservable();
  }
}
