import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module'
import { GirlsListService } from './girls-list.service';
import { ModalWindowComponent } from './modal-window/modal-window.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    GirlsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
