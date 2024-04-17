import { PostService } from './../../services/PostService';
import { ProfileService } from './../../services/ProfileService';
import { Component } from '@angular/core';
import { LogoHeaderComponent } from '../components/logo-header/logo-header.component';
import { ProfileListComponent } from '../components/profile-list/profile-list.component';
import { PostListComponent } from '../components/post-list/post-list.component';
import { RouterLink } from '@angular/router';
import { InfoIconComponent } from '../components/icons/info-icon/info-icon.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [LogoHeaderComponent, ProfileListComponent, PostListComponent, RouterLink, InfoIconComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  profiles: Array<Object> = [];
  posts: Array<Object> = [];

  constructor(private profileService: ProfileService, private postService: PostService) {
    profileService.getAll().then(p => this.profiles = p);
    postService.getAll().then(p => this.posts = p);
  }
}
