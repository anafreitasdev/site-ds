import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'cfc-ds';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})
export class FirstSectionComponent {
  readonly ButtonType = ButtonType;

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
