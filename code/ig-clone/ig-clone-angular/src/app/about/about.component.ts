import { Component } from '@angular/core';
import { NotInstagramLogoComponent } from '../components/not-instagram-logo/not-instagram-logo.component';
import { SendIconComponent } from '../components/icons/send-icon/send-icon.component';
import { InfoBlockComponent } from '../components/info-block/info-block.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NotInstagramLogoComponent, SendIconComponent, InfoBlockComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
