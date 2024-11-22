import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Service/user.service';
import { Router, RouterLink } from '@angular/router'; // Corrected import for Router
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public data = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router) {}

  // registeredUser() {
  //   this.userService.register(this.data.value).subscribe(
  //     response => {
        
  //       alert("User Login Successfully");
  //       this.router.navigate(['/Dashboard']);  // This should now work correctly
  //     },
  //     error => {
  //       alert("Register first");
  //     }
  //   );
  // }
  registeredUser() {
    // Check if the form is filled before proceeding
    if (!this.data.value.username || !this.data.value.password) {
      alert("Please fill in both username and password.");
      return;
    }

    // Attempt to log in the user
    this.userService.loginUser(this.data.value).subscribe(
      response => {
        // If login is successful, navigate to Dashboard
        alert("Login successful");
        this.router.navigate(['/Dashboard']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // If credentials are incorrect, alert the user and suggest registration
          alert("Invalid credentials. Please enter correct username and password.");
        } else if (error.status === 404) {
          // If the user is not registered, prompt to register
          alert("User not found. Please register first.");
          this.router.navigate(['/register']);  // Redirect to the registration page
        } else {
          // For any other errors, show a general error message
          alert("An error occurred. Please try again later.");
        }
      }
    );
  }
  // registeredUser() {
  //   this.userService.register(this.data.value).subscribe(
  //     response => {
  //       // Assuming `response` has a property to indicate successful login or registration
  //       if (this.data.value) { // Adjust this condition based on your API's response structure
  //         alert("User Login Successfully");
  //         console.log("user Login Successfully")
  //         this.router.navigate(['/Dashboard']);
  //       } else {
  //         alert("User not registered. Please register first.");
  //         this.router.navigate(['/register']);  // Optional: Redirect to a registration page
  //       }
  //     },
  //     error => {
  //       // This will handle any errors returned from the server
  //       alert("An error occurred. Please try again.");
  //       console.error("Error:", error);
  //     }
  //   );
  }
  

