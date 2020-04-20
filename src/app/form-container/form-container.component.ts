import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {

  constructor(
    private router: Router
  ) { }
    todo = {
      type: '', 
      description: '', 
      participantNum: 0};

  logForm(form) {

    console.log(form.value);
    // first shows input as activitycontainer, then can confirm ?
    // need to use this to send to the post of the api to add to the API endpoint
  }

}
