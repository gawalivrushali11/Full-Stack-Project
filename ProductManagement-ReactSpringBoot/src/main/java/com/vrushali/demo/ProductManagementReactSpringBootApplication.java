package com.vrushali.demo;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;



import com.vrushali.demo.service.ProductService;

@SpringBootApplication
public class ProductManagementReactSpringBootApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext cs=SpringApplication.run(ProductManagementReactSpringBootApplication.class, args);
		 ProductService ps=cs.getBean(ProductService.class);
		
		 ps.getAllProduct().stream().forEach(System.out::println);
		
		 ps.getOutOfWarrantyProduct().stream().forEach(System.out::println);
		 
	
	}

}
