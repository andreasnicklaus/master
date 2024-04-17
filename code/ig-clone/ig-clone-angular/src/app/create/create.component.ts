import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotInstagramLogoComponent } from '../components/not-instagram-logo/not-instagram-logo.component';
import { XIconComponent } from '../components/icons/xicon/xicon.component';
import { PostComponent } from '../components/post/post.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, NotInstagramLogoComponent, XIconComponent, PostComponent, NgFor, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  preloadedMedia: string[] = [
    "canyon.mp4",
    "easter-bunnies.mp4",
    "reading.mp4",
    "skaters.mp4",
    "abstract-circles.jpg",
    "joseph-joker.jpg",
    "asian-house.jpg",
    "lars-local.jpg",
    "backpack.jpg",
    "moon.jpg",
    "beach.mp4",
    "beach.jpg",
    "mountains.jpg",
    "bernd-bart.jpg",
    "peter-poster.jpg",
    "busy-street.jpg",
    "rosa-rot.jpg",
    "couple-kitchen.jpg",
    "snow-mountains.jpg",
    "donna-drama.jpg",
    "steffi-sanft.jpg",
    "dramatic-portrait.jpg",
    "steffi-sauer.jpg",
    "elsa-erdbeere.jpg",
    "surfer.jpg",
    "field-wheat.jpg",
    "tina-traveller.jpg",
    "filippa-feurig.jpg",
    "tokio-trees.jpg",
    "flower-art.jpg",
    "wave.jpg",
    "gabriela-gut.jpg",
    "wild-sea.jpg",
    "garden-art.jpg",
    "your-profile.jpg",
  ]
  userhandle: string = "@you"
  caption: string = ""
  mediaUrl: string = ""
  mediaChoice: string = ""

  mediaSource(): string {
    if (this.mediaUrl) return this.mediaUrl;
    return this.mediaChoice;
  }
}
