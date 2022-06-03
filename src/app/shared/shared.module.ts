import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule
  ], 
  exports: [
    NavComponent,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class SharedModule { }
