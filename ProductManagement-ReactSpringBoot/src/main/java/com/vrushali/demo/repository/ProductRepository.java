package com.vrushali.demo.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.vrushali.demo.model.ProductDetails;


//JpaRepository provides a set of predefined CRUD (Create, Read, Update, Delete) methods and 
//additional query methods that can be used for common database operations. 
//convenient way to interact with a relational database using the Java Persistence API (JPA). 
//JpaRepository extends the PagingAndSortingRepository interface, which in turn extends the CrudRepository interface.


//By annotating a class with @Repository, you enable Spring to automatically 
//create instances of that class as beans in the application context. 
//These repository beans can be injected into other components, such as services or controllers, 
//to interact with the underlying database or data source.

@Repository
public interface ProductRepository extends JpaRepository<ProductDetails,Integer>{
	
	@Query("Select p from ProductDetails p where p.pwarrantydate<CURRENT_DATE")
	 List<ProductDetails> findBypwarrantydate();
	
	

}
