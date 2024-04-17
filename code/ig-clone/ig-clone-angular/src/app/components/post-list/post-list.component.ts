import { Component, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, NgFor],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts!: Array<any>
}
