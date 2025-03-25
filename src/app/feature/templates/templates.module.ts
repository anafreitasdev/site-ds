import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesIndexComponent } from './pages/templates-index/templates-index.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { TemplateBaseComponent } from './pages/template-base/template-base.component';
import { TemplateErroComponent } from './pages/template-erro/template-erro.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [TemplatesIndexComponent, CardTemplateComponent, TemplateBaseComponent, TemplateErroComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplatesModule { }
