package com.vrushali.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vrushali.demo.model.ProductDetails;
import com.vrushali.demo.service.ProductService;

//In Spring Boot, the @RestController annotation is used to mark a class as a 
//RESTful web service controller. It combines the @Controller and @ResponseBody 
//annotations into a single convenient annotation. 
//When you annotate a class with @RestController, it indicates that the class will
//handle incoming HTTP requests and produce the response directly as the body of the response,
//typically in a JSON format.It is commonly used for building RESTful APIs.

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	ProductService ps;
	

	//ResponseEntity is a class that represents the entire HTTP response, 
	//including the status code, headers, and body. 
	//It provides a way to customize the response that will be sent back to the client.
	//ResponseEntity is often used in conjunction with @RestController to return custom 
	//responses from RESTful API endpoints. By using ResponseEntity, you have more control 
	//over the HTTP response, allowing you to set the status code, headers, and response body
	//according to your specific requirements.
	
	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody ProductDetails p)
	{
		return new ResponseEntity<>(ps.saveProduct(p),HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllProduct()
	{
		return new ResponseEntity<>(ps.getAllProduct(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getProduct(@PathVariable int id)
	{
		return new ResponseEntity<>(ps.getProductById(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable int id)
	{
		ps.removeProduct(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/editProduct/{id}")
	public ResponseEntity<?> updateProduct(@RequestBody ProductDetails p,@PathVariable int id)
	{      
       	return new ResponseEntity<>(ps.editProduct(p,id),HttpStatus.OK);
	}
	
	@GetMapping("/outofwarranty")
	public ResponseEntity<?> getoutofwarrantyproduct()
	{
		return new ResponseEntity<>(ps.getOutOfWarrantyProduct(),HttpStatus.OK);
	}
	
	
	
}
