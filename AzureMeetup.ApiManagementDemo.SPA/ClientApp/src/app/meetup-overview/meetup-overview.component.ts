import { Component, OnInit, OnDestroy } from '@angular/core';
import { MeetupService } from '../services/meetup.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from "rxjs/operators"
import { IMeetup } from '../models/IMeetup';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'meetup-overview',
  templateUrl: './meetup-overview.component.html',
  styleUrls: ['./meetup-overview.component.css']
})
export class MeetupOverviewComponent implements OnInit, OnDestroy {

  public upcomingMeetups: IMeetup[];
  public recentMeetups: IMeetup[];
  public isBusy: boolean;

  private _unsubscribe: Subject<void> = new Subject();

  constructor(private readonly _meetupService: MeetupService, private readonly _refreshService: RefreshService) { }

  public ngOnInit() {
      
      this._refreshService.subscribeToRefresh()
                          .pipe(takeUntil(this._unsubscribe))
                          .subscribe(() => this.startLoadMeetups());
      this.startLoadMeetups();
  }

  public ngOnDestroy() {
      
    this._unsubscribe.next();
    this._unsubscribe.complete();
}
  
  private startLoadMeetups(): any {
    
    this.isBusy = true;
    this._meetupService.getMeetups()
                      .pipe(takeUntil(this._unsubscribe), finalize(() => this.isBusy = false))
                      .subscribe(meetups => {

      let today = new Date();
      today.setHours(0, 0, 0, 0);
      this.recentMeetups = meetups.filter(m => m.date < today);
      this.upcomingMeetups = meetups.filter(m => m.date >= today);
    });
  }
}
