import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { GovDsModule } from '../core/components/gov-ds/gov-ds.module';
import { FirstSectionComponent } from './home/components/first-section/first-section.component';
import { SecondSectionComponent } from './home/components/second-section/second-section.component';
import { ThirdSectionComponent } from './home/components/third-section/third-section.component';
import { AboutPageComponent } from './home/pages/about-page/about-page.component';
import { MatIconModule } from '@angular/material/icon';
import { PrinciplesPageComponent } from './home/pages/principles-page/principles-page.component';


@NgModule({
  declarations: [HomePageComponent, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, AboutPageComponent, PrinciplesPageComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    GovDsModule,
    MatIconModule,
  ],
})
export class FeatureModule { }
