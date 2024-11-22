import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { response } from 'express';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  Authenticate: any;
  username:any;

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.username = +this.route.snapshot.params['username'];
     this.userService.getUserProfile(this.username).subscribe(response=>{
     this.Authenticate=response;
    });
    
  }
  logOut(){
    return  this.router.navigate(['/register']);
  }
}
