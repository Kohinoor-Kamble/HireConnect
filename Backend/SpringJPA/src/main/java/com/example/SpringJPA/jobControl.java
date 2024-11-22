package com.example.SpringJPA;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("api/task")
@CrossOrigin(origins = "http://localhost:4200")

public class jobControl {
	@Autowired
	private jobService js;
	@GetMapping
	public List<Job> getAll(){
		return js.getAllJobs();
		}
	@GetMapping("/{id}")
	public Job getJobById(@PathVariable Long id) {
		return js.getById(id);
	}
	
	@PostMapping
	public Job postJob(@RequestBody Job b) {
		return js.saveJob(b);
	}
	
}