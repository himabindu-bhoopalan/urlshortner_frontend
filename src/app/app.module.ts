import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import {HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ViewurlComponent } from './viewurl/viewurl.component';
@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    ViewurlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
