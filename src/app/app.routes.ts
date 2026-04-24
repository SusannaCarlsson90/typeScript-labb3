import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Fun } from './fun/fun';
import { NotFound } from './not-found/not-found';
import { MainNav } from './main-nav/main-nav';

export const routes: Routes = [
  { path: "home", component: Home},
  {path: "about", component: About},
  {path: "fun", component: Fun},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "404", component: NotFound},
  {path: "**", redirectTo: "404", pathMatch: "full"}

];
