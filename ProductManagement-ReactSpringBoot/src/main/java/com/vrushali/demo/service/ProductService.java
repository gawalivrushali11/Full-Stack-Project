package com.vrushali.demo.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.vrushali.demo.model.ProductDetails;
import com.vrushali.demo.repository.ProductRepository;

//is typically used to identify classes that handle business logic, 
//perform operations, or provide services within an application.
//By annotating a class with @Service, you allow Spring to automatically detect 
//and instantiate the service component as a bean within the application context. 
//These service beans can be injected into other components, such as controllers or other services, 
//to provide the required functionality.

@Component
public class ProductService {
	
	//By annotating a field, constructor, or setter method with @Autowired, 
	//Spring will automatically detect the appropriate bean and inject it into the annotated component or services.
	
	@Autowired
	private ProductRepository pr;
	
	public ProductDetails saveProduct(ProductDetails p)
	{
		return pr.save(p);
	}
	
	public List<ProductDetails> getAllProduct()
	{
		
		return pr.findAll();
		}
	
	//Optional -It is primarily used to handle situations where a value may be absent or uncertain,
	//reducing the chances of encountering null pointer exceptions.
	public Optional<ProductDetails> getProductById(int id)
	{
		
		return pr.findById(id);
	}
	
	public void removeProduct(int id)
	{
		ProductDetails  p=pr.findById(id).get();
		if(p!=null)
		{
			pr.delete(p);
		}
		
		
	}
	
	public ProductDetails editProduct(ProductDetails p,int id)
	{
		ProductDetails  oldp=pr.findById(id).get();
			
		
			oldp.setPname(p.getPname());
			oldp.setPmanufacturer(p.getPmanufacturer());
			oldp.setPdescription(p.getPdescription());
			oldp.setPprice(p.getPprice());
			oldp.setPwarrantydate(p.getPwarrantydate());
		
			
		return pr.save(oldp);
		
	}
	
	public List<ProductDetails> getOutOfWarrantyProduct()
	{
//		LocalDate d=LocalDate.now();
		
			
		return pr.findBypwarrantydate();
	}
	
	

}
