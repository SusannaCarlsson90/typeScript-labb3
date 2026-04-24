import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
})
export class MainNav {
  isMenuOpen = false; //menyn är stängd som standard
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
