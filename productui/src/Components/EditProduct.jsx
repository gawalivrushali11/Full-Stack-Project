import React, { useEffect } from 'react'
import '../CSS/main.css';
import { useState } from 'react';
import ProductService from '../Service/ProductService';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product,setProduct]=useState({
    pname:"",
    pdescription:"",
    pprice:"",
    pwarrantydate:"",
    pmanufacturer:""
  })

  const {id}=useParams();  //To get parameters
  console.log(id)

 useEffect(()=>{
    ProductService.getProductById(id)
    .then((res=>{setProduct(res.data)}))
    .catch((error)=>console.log("Error in editing"))
 },[])

 console.log("product use",product);


 const handleChange=(e)=>
 {
        const value=e.target.value;
        console.log(value);
        setProduct({...product,[e.target.id]:value})
 }

const navigate=useNavigate();
console.log("Product",product)

 const productUpdate=(e)=>
{
    e.preventDefault();
    console.log("update",product);

    ProductService.editProduct(product)
    .then((res)=>{navigate("/");console.log("Product updated Successfully")})   //Navigate to home on successful updation
    .catch((error)=>{console.log("Error in update Product")});

}


  return (
    <>
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <div className="card ext-left">
            <div className="card-header">
                Edit Product
            </div>


                <div className="card-body">
                <form onSubmit={(e)=>productUpdate(e)}>
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
                        Update
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

export default EditProduct