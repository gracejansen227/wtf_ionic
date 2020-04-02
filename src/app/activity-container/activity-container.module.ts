import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ActivityContainerComponent } from './activity-container.component';

@NgModule({
  imports: [ CommonModule, IonicModule],
  declarations: [ActivityContainerComponent],
  exports: [ActivityContainerComponent]
})
export class ActivityContainerComponentModule {
}
