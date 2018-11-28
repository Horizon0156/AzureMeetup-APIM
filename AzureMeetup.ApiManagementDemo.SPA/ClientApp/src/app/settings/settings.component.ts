import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { MatDialogRef } from '@angular/material';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public apiUrl: string;
  public subscriptionKey: string;

  constructor(
    private readonly _dialogRef: MatDialogRef<SettingsComponent>, 
    private readonly _settingsService: SettingsService,
    private readonly _refreshService: RefreshService) { }

  public ngOnInit() {

    this.apiUrl = this._settingsService.meetupApiUrl;
    this.subscriptionKey = this._settingsService.apiSubscriptionKey;
  }

  public saveSettings(): void {

    this._settingsService.meetupApiUrl = this.apiUrl;
    this._settingsService.apiSubscriptionKey = this.subscriptionKey;

    this._refreshService.notifyRefresh();
    this._dialogRef.close();
  }

  public cancel(): void {

    this._dialogRef.close();
  }
}
