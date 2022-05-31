import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeditateComponent } from './meditate.component';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon'; 
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MeditateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    SharedModule
  ]
})
export class MeditateModule { }
