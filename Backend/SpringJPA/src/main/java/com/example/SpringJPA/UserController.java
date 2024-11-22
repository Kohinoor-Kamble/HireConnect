package com.example.SpringJPA;






import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auths")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserService userService;

	
	@PostMapping
	public Authenticate registeredUsers(@RequestBody Authenticate auth) {
		return userService.registerUser(auth);
	}
	
	  @GetMapping("/{username}")
	    public Authenticate getUser(@PathVariable String username) {
	        return userService.findUserByUsername(username);
	    }
      @PostMapping("/login")
      public boolean loginUser(@RequestBody loginRequest login){
    	  return userService.loginUser(login);
    	  
    	  
      }
   


}
