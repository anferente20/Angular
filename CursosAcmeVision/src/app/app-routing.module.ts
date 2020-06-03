import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';


const routes: Routes = [
  {    path: '', redirectTo: 'home', pathMatch: 'full' },
  {    path: 'home', component: HomeComponent},
  {    path: 'about', component: AboutComponent},
  {    path: 'heroe/:id', component: HeroeComponent},
  {    path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
