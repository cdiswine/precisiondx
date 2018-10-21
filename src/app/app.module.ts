import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ExploreTrendsComponent } from './explore-trends/explore-trends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommunityComponent } from './community/community.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AddDataModule } from './add-data/add-data.module';



const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent, data: { page: 'dashboard' } },
  { path: 'add-data', component: AddDataComponent, data: { page: 'add-data' } },
  { path: 'community', component: CommunityComponent, data: { page: 'community' } },
  { path: 'explore-trends', component: ExploreTrendsComponent, data: { page: 'explore-trends' } },
  { path: 'recently-added', component: RecentlyAddedComponent, data: { page: 'recently-added' } },
];

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    ExploreTrendsComponent,
    DashboardComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AddDataModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
