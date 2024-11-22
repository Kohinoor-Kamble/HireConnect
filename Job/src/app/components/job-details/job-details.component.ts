import { Component } from '@angular/core';
import { JobService } from '../../Service/job.service';
// import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
jobId: number=0;
job:any=null;
jobs:any[]=[];
// jobId: string | null = null;

  constructor(private jobService:JobService, private route:ActivatedRoute){}

  ngOnInit(){
    this.jobId = +this.route.snapshot.params['id'];
    if(this.jobId){
      this.jobService.getJobById(this.jobId).subscribe(data=>{
        this.job=data;
      });
  
    }
  }
}
   
  // }
  // ngOnInit(): void {
  //   // Get job ID from the route
  //   this.jobId = this.route.snapshot.paramMap.get('id');

  //   if (this.jobId) {
  //     // Fetch job details
  //     this.jobService.getJobDetails(this.jobId).subscribe((data: any) => {
  //       this.job = data;
  //     });
  //   }
  // }
  // ngOnInit(jobId: number){
  //   // this.jobService.getJobById(this.jobId).subscribe({
  //   //   next: (data) => (this.jobId = data),
  //   //   error: (err) => console.error('Error:', err.message),
  //   // });
  // }
  
  


