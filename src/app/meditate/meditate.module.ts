import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeditateComponent } from './meditate.component';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { AppRoutingModule } from '../app-routing.module';
import { TimeComponent } from './time/time.component';
import { MentorComponent } from './mentor/mentor.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { OverviewComponent } from './overview/overview.component';
import { MeditateService } from '../services/meditate.service';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    MeditateComponent,
    TimeComponent,
    MentorComponent,
    ChallengeComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    SharedModule,
    MatTableModule

  ],
  providers:[
    MeditateService
  ]
})
export class MeditateModule { }
