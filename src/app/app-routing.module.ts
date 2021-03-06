import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import {SolisalaComponent} from './components/solisala/solisala.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: SolisalaComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
