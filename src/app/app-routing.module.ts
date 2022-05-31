import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeditateComponent } from './meditate/meditate.component';

const routes: Routes = [{
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full',
},
  { path: 'home', 
  component: HomeComponent },
  {
  path:'meditate',
  component:MeditateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
