package com.example.SpringJPA;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Authenticate {
	
	
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "name")
	private String username;
	@Column(name="password")
	private String password;
	@Column(name="role")
	private String Role;
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}
	public Authenticate() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}
