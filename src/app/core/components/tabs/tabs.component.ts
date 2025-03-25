import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.tabsInicialize();
  }

  tabsInicialize() {
    const abasList: any[] = [];
    const brTabs = document.querySelectorAll('.br-tab');
    brTabs.forEach((brTab) => {
      const brTabInstance = new (window as any).core.BRTab(
        'br-select',
        brTab,
        null
      );
      abasList.push(brTabInstance);
    });
  }
}
