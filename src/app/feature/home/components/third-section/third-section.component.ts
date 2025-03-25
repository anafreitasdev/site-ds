import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.scss'
})
export class ThirdSectionComponent {

  constructor(private router: Router){}


  navigate(route: string){
    this.router.navigate([route])
  }

}
