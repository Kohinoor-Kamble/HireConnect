package com.example.SpringJPA;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;



//@Repository
//public interface UserRepository extends JpaRepository<User, Long> {
//
//}
@Repository
public interface UserRepository extends JpaRepository<Authenticate, String>{
	  Authenticate findByUsername(String username);
}
