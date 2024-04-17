import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  standalone: true,
  imports: [],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.css'
})
export class InfoBlockComponent {
  @Input() title!: string;
}
