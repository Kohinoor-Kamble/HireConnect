import { Component,OnInit } from '@angular/core';
import { JobService } from '../../Service/job.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { response, Router } from 'express';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgFor,RouterLink,NgIf,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{
   job:any[]=[];
  jobs:any[]=[];
  location: string = '';
  
  constructor(private jobService:JobService){}

  ngOnInit(){
    this.jobService.getJob().subscribe(data=>{
      this.job=data;
    });
  }

 
}
