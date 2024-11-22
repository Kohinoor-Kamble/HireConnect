package com.example.SpringJPA;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PortalException extends RuntimeException{
	public PortalException(String msg) {
		super(msg);
		
	}
}