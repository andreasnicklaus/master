import { ProfileService } from './../../services/ProfileService';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { NotInstagramLogoComponent } from '../components/not-instagram-logo/not-instagram-logo.component';
import { XIconComponent } from '../components/icons/xicon/xicon.component';
import { PostService } from '../../services/PostService';
import { ProfileCompComponent } from '../components/profile-comp/profile-comp.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NotInstagramLogoComponent, XIconComponent, RouterLink, ProfileCompComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  handle: string = "";

  username: string = "";
  profileImageSource: string = "";
  caption: string = "";
  images: Array<string> = [];
  createdAt: Date = new Date();


  constructor(private route: ActivatedRoute, private profileService: ProfileService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.handle = params.get('handle')!;

      this.profileService.getByHandle(this.handle).then((user) => {
        this.username = user!.username;
        this.profileImageSource = user!.profileImageSource;
        this.caption = user!.caption;
      })

      this.postService.getByUserHandle(this.handle).then(
        (posts) => (this.images = posts.map((p) => p.mediaSource))
      )
    });
  }

}
