import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    private _meetupApiUrl: string;
    private _apiSubscriptionKey: string;

    constructor() {

        let cachedUrl = sessionStorage.getItem("meetupApiUrl");

        this._meetupApiUrl = cachedUrl && cachedUrl !== ""
            ? cachedUrl
            : environment.defaultApiUrl;

        this._apiSubscriptionKey = sessionStorage.getItem("apiSubscriptionKey");
    }
    get meetupApiUrl(): string {

        return this._meetupApiUrl;
    }
    
    set meetupApiUrl(newUrl: string) {

        this._meetupApiUrl = newUrl;
        sessionStorage.setItem("meetupApiUrl", newUrl);
    }

    get apiSubscriptionKey(): string {

        return this._apiSubscriptionKey;
    }
    
    set apiSubscriptionKey(newKey: string) {

        this._apiSubscriptionKey = newKey;
        sessionStorage.setItem("apiSubscriptionKey", newKey);
    }
}
