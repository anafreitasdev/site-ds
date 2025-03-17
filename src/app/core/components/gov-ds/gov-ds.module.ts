import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicButtonComponent } from './magic-button/magic-button.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [MagicButtonComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MagicButtonComponent,
    ButtonComponent
  ]
})
export class GovDsModule { }
