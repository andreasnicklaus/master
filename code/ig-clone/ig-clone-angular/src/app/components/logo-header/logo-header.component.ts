import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotInstagramLogoComponent } from '../not-instagram-logo/not-instagram-logo.component';
import { HeartIconComponent } from '../icons/heart-icon/heart-icon.component';
import { SendIconComponent } from '../icons/send-icon/send-icon.component';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';

@Component({
  selector: 'app-logo-header',
  standalone: true,
  imports: [RouterLink, NotInstagramLogoComponent, HeartIconComponent, SendIconComponent, PlusIconComponent],
  templateUrl: './logo-header.component.html',
  styleUrl: './logo-header.component.css'
})
export class LogoHeaderComponent {

}
