import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatRippleModule,
  MatSlideToggleModule
} from '@angular/material';
import { MatGridListResponsiveModule } from '../lib/mat-grid-list-responsive/mat-grid-list-responsive.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatGridListResponsiveModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
