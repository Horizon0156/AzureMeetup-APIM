import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMeetup } from '../models/IMeetup';
import { SettingsService } from './settings.service';
import { tap, flatMap } from 'rxjs/operators';
import { MsalService } from '@azure/msal-angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

    constructor(
        private readonly _authService: MsalService,
        private readonly _settings: SettingsService, 
        private readonly _httpClient: HttpClient) { 
    }

    public getMeetups(): Observable<IMeetup[]> {

        let apiEndpoint = this._settings.meetupApiUrl;

        if (!apiEndpoint) {

            return of([]);
        }

      var authHeader = new HttpHeaders()
        if (this._settings.apiSubscriptionKey && this._settings.apiSubscriptionKey !== "") {

          authHeader = authHeader.append("Ocp-Apim-Subscription-Key", this._settings.apiSubscriptionKey);
        }

      return this._httpClient.get<IMeetup[]>(apiEndpoint.endsWith("/") ? + apiEndpoint + "meetup" : apiEndpoint + "/meetup", {headers: authHeader})
                               .pipe(tap(r => r.forEach(m => m.date = new Date(m.date))));
    }

    public createMeetup(meetup: IMeetup): Observable<any> {

        let apiEndpoint = this._settings.meetupApiUrl;

        if (!apiEndpoint) {

            return of(null);
        }

        let token = Observable.fromPromise(this._authService.acquireTokenSilent([environment.apiScope]));
        return token.pipe(flatMap(token => {
            
            var authHeader = new HttpHeaders({"Authorization": "Bearer " + token})

          if (this._settings.apiSubscriptionKey && this._settings.apiSubscriptionKey !== "") {

            authHeader = authHeader.append("Ocp-Apim-Subscription-Key", this._settings.apiSubscriptionKey);
          }
            return this._httpClient.post(apiEndpoint.endsWith("/") ? + apiEndpoint + "meetup" : apiEndpoint +  "/meetup", meetup, {headers: authHeader});
        }));
    }
}
