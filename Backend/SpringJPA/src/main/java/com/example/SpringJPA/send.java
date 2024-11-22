package com.example.SpringJPA;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class send {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="job_id")
	private Long jobid;
	

	@Column(name="applicationName")
	private String applicationName;
	
	@Column(name="applicationEmail")
	private String applicationEmail;
	
	
	
	  @Column(name = "resume", columnDefinition = "TEXT")
	    private String resume;
	  
	  

	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getJobid() {
		return jobid;
	}

	public void setJobid(Long jobid) {
		this.jobid = jobid;
	}

	public String getApplicationName() {
		return applicationName;
	}

	public void setApplicationName(String applicationName) {
		this.applicationName = applicationName;
	}

	public String getApplicationEmail() {
		return applicationEmail;
	}

	public void setApplicationEmail(String applicationEmail) {
		this.applicationEmail = applicationEmail;
	}


	
	
	

}
