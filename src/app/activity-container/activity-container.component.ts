import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MultiPersonActivityEntry } from '../data/multiPersonActivities';

@Component({
  selector: 'activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.scss'],
})
export class ActivityContainerComponent implements OnChanges {
  @Input()
  public readonly data: MultiPersonActivityEntry;

  constructor(
    private router: Router
  ) { }

}
