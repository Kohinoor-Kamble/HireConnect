package com.example.SpringJPA;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
	List<Application> findBySeekerId(Long seekerId);
    List<Application> findByJobId(Long jobId);

}
