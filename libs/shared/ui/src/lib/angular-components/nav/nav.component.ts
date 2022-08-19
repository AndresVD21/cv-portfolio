import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cv-portfolio-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
