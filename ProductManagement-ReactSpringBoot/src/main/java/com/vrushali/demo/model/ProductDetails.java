package com.vrushali.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

//@Data from Lombok-It provides annotations that automatically generate common code, 
//such as getters, setters, constructors, and toString methods.

//@Data

//The @Entity annotation in Spring Boot is used to mark a Java class as an entity, 
//indicating that it represents a table in a relational database

@Entity

//It provides control over the table name, schema, and other table-level attributes.

@Table(name="productdetails")
public class ProductDetails {
	
	//The @Id annotation specifies the primary key of the entity.
	@Id
	
	//the @GeneratedValue annotation specifies that the value of the primary key will be
	//generated automatically by the database.
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int pid;
	private String pdescription;
	private int pprice;
	private String pname;
	private String pmanufacturer;
	private LocalDate pwarrantydate;
	
	public ProductDetails(String pdescription, int pprice, String pname, String pmanufacturer,
			LocalDate pwarrantydate) {
	
		this.pdescription = pdescription;
		this.pprice = pprice;
		this.pname = pname;
		this.pmanufacturer = pmanufacturer;
		this.pwarrantydate = pwarrantydate;
	}

	public ProductDetails() {
	
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ProductDetails [pid=" + pid + ", pdescription=" + pdescription + ", pprice=" + pprice + ", pname="
				+ pname + ", pmanufacturer=" + pmanufacturer + ", pwarrantydate=" + pwarrantydate + "]";
	}

	public String getPdescription() {
		return pdescription;
	}

	public void setPdescription(String pdescription) {
		this.pdescription = pdescription;
	}

	public int getPprice() {
		return pprice;
	}

	public void setPprice(int pprice) {
		this.pprice = pprice;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPmanufacturer() {
		return pmanufacturer;
	}

	public void setPmanufacturer(String pmanufacturer) {
		this.pmanufacturer = pmanufacturer;
	}

	public LocalDate getPwarrantydate() {
		return pwarrantydate;
	}

	public void setPwarrantydate(LocalDate pwarrantydate) {
		this.pwarrantydate = pwarrantydate;
	}
	
	
	
	
	
	
	
	
	
}
