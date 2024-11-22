package com.example.SpringJPA;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/applications")
@CrossOrigin(origins = "http://localhost:4200")
public class ApplicationController {
	@Autowired
	private ApplicationService as;
//	@PostMapping("/{jobId}")
//	public Application applyJob(@PathVariable Long jobId, @RequestBody Application application) {
//		application.setId(jobId);
//		return as.applicationJob(application);
//	}
	
	 @PostMapping("/submit")
	    public Application submitApplication(@RequestBody Application application) {
	        return as.applicationJob(application);
	    }

	    // Endpoint to get applications by seeker ID
	    @GetMapping("/seeker/{seekerId}")
	    public List<Application> getApplicationsBySeeker(@PathVariable Long seekerId) {
	        return as.getApplicationsBySeeker(seekerId);
	    }

	    // Endpoint to get applications by job ID
	    @GetMapping("/job/{jobId}")
	    public List<Application> getApplicationsByJob(@PathVariable Long jobId) {
	        return as.getApplicationsByJob(jobId);
	    }

	    // Endpoint to update the status of an application
	    @PutMapping("/update/{applicationId}")
	    public Optional<Application> updateApplicationStatus(@PathVariable Long applicationId, @RequestBody String status) {
	        return as.updateApplicationStatus(applicationId, status);
	    }

}
