package com.example.SpringJPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/applicants")
@CrossOrigin(origins = "http://localhost:4200")
public class sendController {

	private sendService ss;
	@Autowired
	public sendController(sendService ss) {
		this.ss=ss;
	}
	
	@PostMapping
	public 	send createApplication(@RequestBody send application){
		return ss.saveApplication(application);
	}
	
	

}
