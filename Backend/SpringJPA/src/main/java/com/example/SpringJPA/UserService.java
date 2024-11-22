package com.example.SpringJPA;



import java.util.Optional;

//import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;
	
//	@Autowired
//	 private PasswordEncoder passwordEncoder;
	
	
	  public Authenticate registerUser(Authenticate auth) {
          return ur.save(auth);
	  }
        
	  public Authenticate findUserByUsername(String username){
		  return  ur.findByUsername(username);
	  }
	  
	  public Boolean loginUser(loginRequest loginRequest) {
		  Optional<Authenticate> user = ur.findById(loginRequest.getUsername());
		  
		  if(user == null) {
			  return false;
		  }
		  
		  Authenticate user1= user.get();
		  
		  if(user1.getPassword().equals(loginRequest.getPassword())) {
			  return false;
		  }
		  return true;
	  }
	    
}
