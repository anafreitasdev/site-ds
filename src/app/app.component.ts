import { Component } from '@angular/core';
import { HeaderViewMode, LogoViewMode } from 'cfc-ds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  logoUrl = '/assets/logo.svg';
  title = 'ds-front';
  
  readonly HeaderViewMode = HeaderViewMode;
  readonly LogoViewMode = LogoViewMode;
}
