import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {

  logForm(form) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {}

}
