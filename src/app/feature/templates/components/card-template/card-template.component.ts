import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css'],
})
export class CardTemplateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(route: string) {
    this.router.navigate(['templates', route]);
  }
}
