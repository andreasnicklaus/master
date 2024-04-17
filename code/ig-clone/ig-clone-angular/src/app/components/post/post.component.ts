import { ProfileService } from './../../../services/ProfileService';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaComponentComponent } from '../media-component/media-component.component';
import { HeartIconComponent } from '../icons/heart-icon/heart-icon.component';
import { CommentIconComponent } from '../icons/comment-icon/comment-icon.component';
import { SendIconComponent } from '../icons/send-icon/send-icon.component';
import { BookmarkIconComponent } from '../icons/bookmark-icon/bookmark-icon.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, MediaComponentComponent, HeartIconComponent, CommentIconComponent, SendIconComponent, BookmarkIconComponent, NgFor, NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() userhandle!: string;
  @Input() caption!: string;
  @Input() likeCount!: number;
  @Input() mediaSource!: string;
  @Input() hideActionIcons!: Boolean;
  @Input() createdAt!: Date;

  user?: any = undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getByHandle(this.userhandle).then((user) => this.user = user)
  }

  creationTimeToString(): string {
    const msSinceCreation =
      new Date().valueOf() - new Date(this.createdAt).valueOf();

    const msPerMinute = 1000 * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const years = Math.floor(msSinceCreation / msPerYear);
    if (years >= 1) return `${years} year${years > 1 ? "s" : ""} ago`;

    const months = Math.floor(msSinceCreation / msPerMonth);
    if (months >= 1) return `${months} month${months > 1 ? "s" : ""} ago`;

    const weeks = Math.floor(msSinceCreation / msPerWeek);
    if (weeks >= 1) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

    const days = Math.floor(msSinceCreation / msPerDay);
    if (days >= 1) return `${days} day${days > 1 ? "s" : ""} ago`;

    const hours = Math.floor(msSinceCreation / msPerHour);
    if (hours >= 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    const minutes = Math.floor(msSinceCreation / msPerMinute);
    if (minutes >= 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

    return "Just now";
  }
}
