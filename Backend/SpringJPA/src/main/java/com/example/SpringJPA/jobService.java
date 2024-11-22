package com.example.SpringJPA;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class jobService {
	
	
	@Autowired
	private JobRepository  jr;
	
	public List<Job> getAllJobs(){
		return jr.findAll();
		}
	
	public Job getById(Long id) {
		return jr.findById(id).orElse(null);
	}
	
	 public Job saveJob(Job j) {
	        return jr.save(j);
	    }
	
//	@Autowired
//	private Task_Repo tr; //reference variable
//	
//	
//	//GET -> get all
//	public List<Task> findAll(){
//		return tr.findAll();
//	}
//	
//	
//	//GET -> get by id
//	public Task getbyID(Long Id) {
//		return tr.findById(Id).orElseThrow(() -> new Task_Exception("Resource not found for id = " + Id));	
//	}
//	
//	
//	//PUT -> update an existing entry
//	public void update(Task t, Long Id) {
//		Task t1 = getbyID(Id);
//		
//		t1.setAsby(t.getAsby());
//		t1.setAsto(t.getAsto());
//		t1.setTc(t.getTc());
//		t1.setTd(t.getTd());
//		
//		
//		tr.save(t1);
//	}
//	
//	//POST -> Create a new entry
//	public Task create(Task t) {
//		System.out.println(t.getAsby());
//		tr.save(t);
//		return t;
//	}
//	
//	//DELETE -> Deleting an existing entry
//	public void delete(Long Id) {
//		Task t2 = getbyID(Id);
//		
//		tr.delete(t2);
//	}
}