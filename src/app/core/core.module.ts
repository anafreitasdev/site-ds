import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GovDsModule } from './components/gov-ds/gov-ds.module';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabsComponent
  ],
})
export class CoreModule { }
