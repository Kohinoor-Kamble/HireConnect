package com.example.SpringJPA;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface sendRepository extends JpaRepository<send,Long> {

}
