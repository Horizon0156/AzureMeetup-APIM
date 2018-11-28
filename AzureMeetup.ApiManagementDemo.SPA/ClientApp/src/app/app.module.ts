import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule,MatCardModule, MatToolbarModule, MatBadgeModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { MeetupOverviewComponent } from './meetup-overview/meetup-overview.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { MsalModule } from "@azure/msal-angular";
import { environment } from '../environments/environment';
import { LoggingInterceptor } from './interceptor/logging.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MeetupOverviewComponent,
    SettingsComponent,
    CreateMeetupComponent
  ],
  entryComponents: [
    SettingsComponent,
    CreateMeetupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatBadgeModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MsalModule.forRoot({
      clientID: environment.b2cClientId,
      authority: `https://login.microsoftonline.com/tfp/${environment.b2cDomain}/${environment.b2cPolicy}`
    }),
    RouterModule.forRoot([])
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
