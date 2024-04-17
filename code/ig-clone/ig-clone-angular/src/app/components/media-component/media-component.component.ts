import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './media-component.component.html',
  styleUrl: './media-component.component.css'
})
export class MediaComponentComponent {
  @Input() src!: string;
  @Input() alt: string = "";
  @Input() width?: string;
  @Input() height?: string;
  @Input() id?: string;
  @Input() class?: string;

  mediaSource: string = "";


  constructor() { }

  ngOnChanges(): void {
    if (
      this.src == null ||
      this.src == undefined ||
      this.src.startsWith("http")
    )
      this.mediaSource = this.src;

    else this.mediaSource = `assets/stock-footage/${this.src}`
  }

}
