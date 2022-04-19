package com.example.bidordiespring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BidordieSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(BidordieSpringApplication.class, args);
	}

}
