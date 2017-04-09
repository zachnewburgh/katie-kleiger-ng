import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { HeadshotsComponent } from './media/headshots/headshots.component';
import { ResumeComponent } from './media/resume/resume.component';
import { LogoComponent } from './shared/logo/logo.component';
import { NavComponent } from './shared/nav/nav.component';
import { StillsComponent } from './media/stills/stills.component';
import { VideosComponent } from './media/videos/videos.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeadshotsComponent,
    LogoComponent,
    NavComponent,
    ResumeComponent,
    StillsComponent,
    VideosComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
