import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { JobListComponent } from '../job-list/job-list.component';
import { JobPostingComponent } from '../job-posting/job-posting.component';
import { JobService } from '../../Service/job.service';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterModule,CurrencyPipe,NgFor,CommonModule,JobPostingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

// job:any[]=[];
jobs:any[]=[];
location: string = '';

constructor(private jobService:JobService){}

  ngOnInit() {
    this.jobService.getJobs().subscribe((response:any)=>{
      this.jobs=response.results;
    //   console.log(response)
      
    });
  }
}
