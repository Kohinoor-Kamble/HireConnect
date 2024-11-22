import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JobService } from '../../Service/job.service';
import { response } from 'express';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { title } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posting',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.css'
})
export class JobPostingComponent {
  title = new FormControl('', [
      
    Validators.required,
  ]);
  
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(8), // adjust the minimum length as needed
   
  ]);

  location=new FormControl('', [
    
    Validators.required,
  ])
  salary=new FormControl('', [
    
    Validators.required,
  ])
  jobpost=new FormGroup([this.title,this.description, this.location, this.salary]);
    // signup(){
    //      console.log(this.jobpost.value);
    //  }


  job={title:'', description:'',location:'',salary:''};
  router: any;

  constructor(private jobService:JobService,router:Router){}

  postJob(){
    this.jobService.createJob(this.job).subscribe(response=>{
      console.log('job posted Successfully',response)
      alert('Job Posted Succesfully');
      this.jobpost.reset();
      this.router.navigate(['/Dashboard']);
    },
    error=>{
      console.error("Posting a job error",error);

    });


   

    // signup(){
    //   console.log(this.signupform.value);
    // }
    // rebutton(){
    //   this.signupform.reset();
    // }

     
    
  }

}
