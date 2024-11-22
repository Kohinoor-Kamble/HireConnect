package com.example.SpringJPA;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Application {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	 private Long jobId;
	    private Long seekerId;
	    private String status;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Long getJobId() {
			return jobId;
		}
		public void setJobId(Long jobId) {
			this.jobId = jobId;
		}
		public Long getSeekerId() {
			return seekerId;
		}
		public void setSeekerId(Long seekerId) {
			this.seekerId = seekerId;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		


}
