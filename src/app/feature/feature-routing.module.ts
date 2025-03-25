import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { AboutPageComponent } from './home/pages/about-page/about-page.component';
import { PrinciplesPageComponent } from './home/pages/principles-page/principles-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'sobre',
    component: AboutPageComponent,
  },
  {
    path: 'principios',
    component: PrinciplesPageComponent,
  },
  {
    path: 'templates',
    loadChildren: () =>
      import('../feature/templates/templates.module').then((m) => m.TemplatesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
