import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss'],
})
export class ButtonContainerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

    onClick(value) {
    console.log(value);
    this.router.navigate(['/tabs/tab2']);
  }


}
