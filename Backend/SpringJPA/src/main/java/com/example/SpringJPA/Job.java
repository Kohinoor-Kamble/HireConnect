package com.example.SpringJPA;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Job {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	   private Long id;
	@Column(name = "Title")
    private String title;
	@Column(name = "description")
    private String description;
	
	@Column(name = "Location")
    private String Location;
	
	@Column(name = "Salary")
    private Integer Salary;
    
	
	
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	public Integer getSalary() {
		return Salary;
	}
	public void setSalary(Integer salary) {
		Salary = salary;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    
    

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//	
//	@Column(name = "Assigned_By")
//    private String asby;
//	
//	@Column(name = "Assigned_To")
//    private String asto;
//	
//    @CreationTimestamp
//	@Column(name = "Task_Created")
//    private LocalDateTime tc;
//    
//    @UpdateTimestamp
//	@Column(name = "Task_Done")
//    private LocalDateTime td;
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getAsby() {
//		return asby;
//	}
//
//	public void setAsby(String asby) {
//		this.asby = asby;
//	}
//
//	public String getAsto() {
//		return asto;
//	}
//
//	public void setAsto(String asto) {
//		this.asto = asto;
//	}
//
//	public LocalDateTime getTc() {
//		return tc;
//	}
//
//	public void setTc(LocalDateTime tc) {
//		this.tc = tc;
//	}
//
//	public LocalDateTime getTd() {
//		return td;
//	}
//
//	public void setTd(LocalDateTime td) {
//		this.td = td;
//	}

}
