import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';



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
    MatRadioModule,
    FormsModule,

  ], 
  exports: [
    NavComponent,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,

  ]
})
export class SharedModule { }
