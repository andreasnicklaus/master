import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaComponentComponent } from '../media-component/media-component.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [RouterLink, MediaComponentComponent, NgFor],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css'
})
export class ProfileListComponent {
  @Input() profiles!: Array<any>
}
