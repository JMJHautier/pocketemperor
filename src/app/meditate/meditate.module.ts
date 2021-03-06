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
import { MatButtonModule} from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { NavFormComponent } from './nav-form/nav-form.component';
import { QuoteComponent } from './quote/quote.component'; 
import { QuotesService } from '../services/quotes.service';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    MeditateComponent,
    TimeComponent,
    MentorComponent,
    ChallengeComponent,
    OverviewComponent,
    NavFormComponent,
    QuoteComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers:[
    MeditateService,
    QuotesService
  ]
})
export class MeditateModule { }
