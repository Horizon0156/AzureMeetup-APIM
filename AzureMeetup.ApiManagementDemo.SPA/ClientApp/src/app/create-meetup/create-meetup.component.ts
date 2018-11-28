import { Component } from '@angular/core';
import { IMeetup } from '../models/IMeetup';
import { MatDialogRef } from '@angular/material';
import { MeetupService } from '../services/meetup.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html'
})
export class CreateMeetupComponent {

  public meetupToCreate: IMeetup;
  public isBusy: boolean;
  private _unsubscribe: Subject<void> = new Subject();

  constructor(
    private readonly _dialogRef: MatDialogRef<CreateMeetupComponent>, 
    private readonly _meetupService: MeetupService,
    private readonly _refreshService: RefreshService) {

    this.meetupToCreate = {
      title: "",
      description: "",
      speaker: "",
      date: new Date()
    };
  }

  public createMeetup(): void {

    this.isBusy = true;
    this._meetupService
        .createMeetup(this.meetupToCreate)
        .pipe(takeUntil(this._unsubscribe), finalize(() => this.isBusy = false))
        .subscribe(() => {

          this._refreshService.notifyRefresh();
          this._dialogRef.close();
      });
  }
  
  public cancel(): void {

    this._dialogRef.close();
  }
}
