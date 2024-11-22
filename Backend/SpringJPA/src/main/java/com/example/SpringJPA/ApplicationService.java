package com.example.SpringJPA;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationService {
	@Autowired
	private ApplicationRepository ar;
	
	public Application applicationJob(Application app) {
		return ar.save(app);
	}
	 // Submit a new job application
//    public Application submitApplication(Application application) {
//        return applicationRepository.save(application);
//    }

    // Get applications by job seeker ID
    public List<Application> getApplicationsBySeeker(Long seekerId) {
        return ar.findBySeekerId(seekerId);
    }

    // Get applications by job ID
    public List<Application> getApplicationsByJob(Long jobId) {
        return ar.findByJobId(jobId);
    }

    // Update the status of an application
    public Optional<Application> updateApplicationStatus(Long applicationId, String status) {
        Optional<Application> applicationOpt = ar.findById(applicationId);
        if (applicationOpt.isPresent()) {
            Application application = applicationOpt.get();
            application.setStatus(status);
            ar.save(application);
            return Optional.of(application);
        }
        return Optional.empty();
    }

}
