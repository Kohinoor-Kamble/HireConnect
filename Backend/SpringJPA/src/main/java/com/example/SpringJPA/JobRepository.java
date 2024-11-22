package com.example.SpringJPA;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



//@Repository
//public interface Task_Repo extends JpaRepository<Task,Long>{     // task in table in database.
//
//}
@Repository
public interface JobRepository extends JpaRepository<Job, Long>{

}