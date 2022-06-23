import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeComponent } from './meditate/challenge/challenge.component';
import { MeditateComponent } from './meditate/meditate.component';
import { MentorComponent } from './meditate/mentor/mentor.component';
import { OverviewComponent } from './meditate/overview/overview.component';
import { QuoteComponent } from './meditate/quote/quote.component';
import { TimeComponent } from './meditate/time/time.component';

const routes: Routes = [{
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full',
},
  { path: 'home', 
  component: HomeComponent },
  {
  path:'meditate',
  component:MeditateComponent, 
  children: [
    
    {
    path:'1',
    component: TimeComponent,
  },
  {
    path:'2',
    component: MentorComponent,
  },
  {
    path:'3',
    component: ChallengeComponent,
  },
  {
    path:'4',
    component: QuoteComponent,
  },
  {
    path:'5',
    component: OverviewComponent,
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
