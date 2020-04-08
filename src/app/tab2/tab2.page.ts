import { Input, Component, OnChanges, OnInit } from '@angular/core';
import { multiPersonActivityData, MultiPersonActivityEntry } from '../data/multiPersonActivities';
import { Activity } from '../../api/models/activity.model';
import { ApiService } from '../services/api.service';
import { foodData } from '../data/foods';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

public activitiesDataFromDb: Activity;
public randomActivity: MultiPersonActivityEntry;
public randomFood: MultiPersonActivityEntry;
public activities: MultiPersonActivityEntry[];
public foods: MultiPersonActivityEntry[];
  constructor(
    private apiService: ApiService
  ) {
    this.activities = multiPersonActivityData;
    this.foods = foodData;
  }

  ngOnInit(){

    this.apiService.getAllData('activities').subscribe(
      data => this.activitiesDataFromDb = data,
      error => console.log(error.message),
      () => console.log("Completed")
    )

    this.randomActivity = this.activities[Math.floor(Math.random() * this.activities.length)];
    this.randomFood = this.foods[Math.floor(Math.random() * this.foods.length)];
  }

  onClick(){
    console.log('we will randomize again');
    this.randomActivity = this.activities[Math.floor(Math.random() * this.activities.length)];
    this.randomFood = this.foods[Math.floor(Math.random() * this.foods.length)];
  }

}
