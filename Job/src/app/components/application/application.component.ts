import { Component } from '@angular/core';
import { ApplicationService } from '../../Service/application.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {

  applicationName = new FormControl('', [
      
    Validators.required,
  ]);
  
  applicationEmail = new FormControl('', [
    Validators.required,
    Validators.email, // adjust the minimum length as needed
   
  ]);

  resume=new FormControl('', [
    
    Validators.required,
  ])
  
  applicationForm=new FormGroup([this.applicationName,this.applicationEmail, this.resume]);












application={jobid:'',applicationName:'',applicationEmail:'', resume:''};
jobid:number =0;
  router: any;

constructor(private applicationService:ApplicationService, private route:ActivatedRoute){}

ngOnInit(){
  this.jobid=+this.route.snapshot.params['jobid'];
 this.jobid=this.jobid;
}

submitApplication(){
  this.applicationService.applyJob(this.application).subscribe(data=>{
    console.log('Application submitted successfully', data);
    alert('Application Submited successfully');
    this.applicationForm.reset();
 
    
  })
}
logOut(){
  return this.router.navigate(['/Dashboard']);
}

}
