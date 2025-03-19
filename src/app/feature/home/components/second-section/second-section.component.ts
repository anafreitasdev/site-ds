import { Component } from '@angular/core';
import { ButtonType } from 'cfc-ds';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss'
})
export class SecondSectionComponent {
  readonly ButtonType = ButtonType;
  
  constructor(private router: Router) {}
  
  navigateToComponents() {
    console.log('Navegando para a página de componentes');
    // this.router.navigate(['/componentes']);
  }
}
