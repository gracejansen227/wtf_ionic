import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {}

}
