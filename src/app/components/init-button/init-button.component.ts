import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-button',
  imports: [],
  templateUrl: './init-button.component.html',
  styleUrl: './init-button.component.css',
})
export class InitButtonComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
