package com.example.SpringJPA;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class sendService {
	
	private final sendRepository sr;
	
	@Autowired
	public  sendService(sendRepository  sp) {
		this.sr = sp;
		
	}
	 public send saveApplication(send application) {
	    
	        return sr.save(application);
	    }

}
