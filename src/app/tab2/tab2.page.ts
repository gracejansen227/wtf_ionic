import { Input, Component } from '@angular/core';
import { multiPersonActivityData, MultiPersonActivityEntry } from '../data/multiPersonActivities';
import { foodData } from '../data/foods';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 public activities: MultiPersonActivityEntry[];
  constructor() {
    this.activities = multiPersonActivityData;
    this.foods = foodData;
  }

}
