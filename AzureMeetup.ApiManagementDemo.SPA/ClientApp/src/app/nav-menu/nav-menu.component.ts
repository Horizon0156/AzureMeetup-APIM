import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsComponent } from '../settings/settings.component';
import { CreateMeetupComponent } from '../create-meetup/create-meetup.component';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public isUserLoggedIn: boolean;

  constructor(
    private readonly _dialog: MatDialog, 
    private readonly _authService: MsalService, 
    private readonly _broadcastService: BroadcastService,
    private readonly _refreshService: RefreshService) {
    
  }

  public ngOnInit(): void {

    this._broadcastService.subscribe("msal:loginSuccess", () => {
        this.isUserLoggedIn = true;
      });

    this.isUserLoggedIn = this._authService.getUser() != null;
  }

  public openSettings(): void {

    this._dialog.open(SettingsComponent, {
      width: '350px'
    });
  }

  public openNewMeetupDialog(): void {

    this._dialog.open(CreateMeetupComponent, {
      width: '350px'
    });
  }

  public login(): void {

    this._authService.loginRedirect();
  }

  public logout(): void {

    this._authService.logout();
    this.isUserLoggedIn = false;
  }

  public triggerReload(): void {

    this._refreshService.notifyRefresh();
  }
}
