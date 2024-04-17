import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-comp',
  standalone: true,
  imports: [],
  templateUrl: './profile-comp.component.html',
  styleUrl: './profile-comp.component.css'
})
export class ProfileCompComponent {
  @Input() username!: string;
  @Input() handle!: string;
  @Input() profileImageSource!: string;
  @Input() caption!: string;
  @Input() createdAt!: Date;
  @Input() images!: string[];
}
