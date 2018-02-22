import { Component } from '@angular/core';
import { MaterialModule } from './material/material.module'

import { Girl } from './girl';
import { GirlsListService } from './girls-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GirlsListService ]
})
export class AppComponent {
  title = 'app';
  FilterText: string ="";
  favouriteSeason: string;
  girls: Girl[] = null;
  currGirl: Girl;
  showModalWindow: boolean = false;

  constructor(private girlsService: GirlsListService) { 
    this.girls = girlsService.GirlList;
  }

  SetCurrGirl(girl: Girl) {
    this.currGirl = girl;
  }

  Filter() {
    this.girls = this.girlsService.GirlList.filter(p => p.name.includes(this.FilterText));
  }

  
}
