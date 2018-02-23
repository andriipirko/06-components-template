import { Component, OnInit } from '@angular/core';

import { Girl } from '../girl';
import { GirlsListService } from '../girls-list.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  newGirl: Girl = new Girl();
  show: boolean = true;

  constructor(private girlListService: GirlsListService) { }

  ngOnInit() {
  }

  CreateGirl() {
    alert(this.newGirl.name);
    this.girlListService.postGirl(this.newGirl);
    alert('created');
    this.show = false;
  }

}
