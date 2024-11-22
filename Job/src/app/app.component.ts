import { Component } from '@angular/core';

import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './Service/user.service';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgIf,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Job';

  constructor(private authService: UserService, private router: Router) {}

  // Method to check if the user is logged in
  isLoggedIn() {

    // this.router.navigate(['/Dashboard']); // Check if authToken exists in local storage
  }

  // Method to log out the user
  logout(): void {
   // You could also just clear localStorage directly here
    // // localStorage.removeItem('authToken'); // Remove auth token from local storage
    // this.router.navigate(['/register']); // Redirect user to login page
  }
}
