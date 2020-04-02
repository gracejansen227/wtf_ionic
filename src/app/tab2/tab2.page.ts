import { Input, Component, OnChanges, OnInit } from '@angular/core';
import { multiPersonActivityData, MultiPersonActivityEntry } from '../data/multiPersonActivities';
import { foodData } from '../data/foods';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

 public activities: MultiPersonActivityEntry[];
  constructor() {
    this.activities = multiPersonActivityData;
    this.foods = foodData;
    this.randomActivity = this.activities[0];
    this.randomFood = this.foods[0];
  }

  ngOnInit(){
    this.randomActivity = this.activities[Math.floor(Math.random() * this.activities.length)];
    this.randomFood = this.foods[Math.floor(Math.random() * this.foods.length)];
  }

  onClick(){
    console.log('we will randomize again');
    this.randomActivity = this.activities[Math.floor(Math.random() * this.activities.length)];
    this.randomFood = this.foods[Math.floor(Math.random() * this.foods.length)];
  }

}
