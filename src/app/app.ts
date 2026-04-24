import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MainNav } from './main-nav/main-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
