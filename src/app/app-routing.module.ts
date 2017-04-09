import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HeadshotsComponent } from './media/headshots/headshots.component';
import { NewsComponent } from './news/news.component';
import { ResumeComponent } from './media/resume/resume.component';
import { StillsComponent } from './media/stills/stills.component';
import { VideosComponent } from './media/videos/videos.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'headshots', component: HeadshotsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'stills', component: StillsComponent },
  { path: 'videos', component: VideosComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}