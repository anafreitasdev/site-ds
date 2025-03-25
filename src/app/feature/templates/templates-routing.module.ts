import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesIndexComponent } from './pages/templates-index/templates-index.component';
import { TemplateBaseComponent } from './pages/template-base/template-base.component';
import { TemplateErroComponent } from './pages/template-erro/template-erro.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesIndexComponent,
  },
  {
    path: 'template-base',
    component: TemplateBaseComponent
  },
  {
    path: 'template-erro',
    component: TemplateErroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
