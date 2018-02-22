import { Component, OnInit } from '@angular/core';

import { Girl } from '../girl';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  newGirl: Girl = new Girl();
  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  CreateGirl() {
    alert('created');
    this.show = false;
  }

}
