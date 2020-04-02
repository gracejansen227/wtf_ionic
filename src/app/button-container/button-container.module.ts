import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ButtonContainerComponent } from './button-container.component';

@NgModule({
  imports: [ CommonModule, IonicModule],
  declarations: [ButtonContainerComponent],
  exports: [ButtonContainerComponent]
})
export class ButtonContainerComponentModule {
}
