import { Component } from '@angular/core';

import { UserService } from '../../Service/user.service';
import { response } from 'express';
import { error } from 'console';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { StrongPasswordRegx } from '../../model/strongPassword';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  username=new FormControl('',[
    Validators.required,
    
  ]);

  role=new FormControl('',[
    
    Validators.required,
  

  ]);
  password=new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(StrongPasswordRegx),
  ])

  registrationGroup=new FormGroup([this.username, this.role,this.password]);

  jobId: number=0;
  Authenticate={username:'', role:'', password:''};
   
  constructor(private userService:UserService, private router:Router){}

  registeredUser(){
    this.userService.register(this.Authenticate).subscribe(response => {
      alert("User Register Successfully");
      this.router.navigate(['/login']);
      // alert('User Registered Successfully');
      
      
    },
    error=>{
      console.error("Register error",error);

    });

  }
}
