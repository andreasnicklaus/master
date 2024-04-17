import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create', component: CreateComponent },
  { path: 'user/:handle', component: ProfileComponent },
];
