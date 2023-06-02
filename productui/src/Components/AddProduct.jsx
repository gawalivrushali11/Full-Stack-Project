import React from 'react'
import '../CSS/main.css';
import { useState } from 'react';
import ProductService from '../Service/ProductService';

const AddProduct = () => {
  const [product,setProduct]=useState({
    pname:"",
    pdescription:"",
    pprice:"",
    pwarrantydate:"",
    pmanufacturer:""
  })

  const [msg,setMessage]=useState();

 const handleChange=(e)=>
 {
        const value=e.target.value;
        console.log(value);
        setProduct({...product,[e.target.id]:value})
 }

const productRegister=(e)=>
{
    e.preventDefault();
    console.log(product);

    ProductService.saveProduct(product)
    .then((res)=>{console.log("Product Added Successfully");setMessage("Product Added Successfully")})
    .catch((error)=>{console.log("Error/saveProduct")});

}


  return (
    <>
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <div className="card ext-left">
            <div className="card-header">
                Add Product
            </div>
            {
                msg &&
                <p className='fa-4 text-center text-success'>{msg}</p>
            }

                <div className="card-body">
                <form onSubmit={(e)=>productRegister(e)}>
                    <div className="form-group ">
                        <label for="productname" >Enter Product Name</label>
                        <input type="text" className="form-control" id="pname" placeholder="Enter product name"
                        onChange={(e)=>handleChange(e)}
                        value={product.pname}/>

                    </div>

                    <div className="form-group">
                        <label for="productdescription">Enter product description </label>
                        <input type="text" className="form-control" id="pdescription" placeholder="product description"
                        onChange={(e)=>handleChange(e)}
                        value={product.pdescription} />
                    </div>

                    <div className="form-group">
                        <label for="productmanufacturer">Enter product manufacturer </label>
                        <input type="text" className="form-control" id="pmanufacturer" placeholder="product manufacturer"
                        onChange={(e)=>handleChange(e)}
                        value={product.pmanufacturer}/>
                    </div>

                    <div className="form-group">
                        <label for="productprice">Enter product price </label>
                        <input type="number" className="form-control" id="pprice" placeholder="product price"
                        onChange={(e)=>handleChange(e)}
                        value={product.pprice} />
                    </div>

                    <div className="form-group">
                        <label for="productwarranty">Enter product warranty </label>
                        <input type="date" className="form-control" id="pwarrantydate" placeholder="product warranty"
                        onChange={(e)=>handleChange(e)}
                        value={product.pwarrantydate} />
                    </div>


                    <button type="submit" className="btn btn-primary btn-lg submit" data-toggle="button" >
                        Submit
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default AddProduct