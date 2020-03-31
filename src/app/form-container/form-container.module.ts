import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormContainerComponent } from './form-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FormContainerComponent],
  exports: [FormContainerComponent]
})
export class FormContainerComponentModule {}
