import React, { useState,useEffect } from 'react'
import ProductService from '../Service/ProductService';
import { Link } from 'react-router-dom';
import '../CSS/main.css';
const Home = () => {

    const [productList,setProductList]=useState([]);
    const [msg,setMessage]=useState();
    const num=0;
    useEffect(()=>{
            init();
    },[])

    const init=()=>
    {
        ProductService.getAllProduct()
        .then((res)=>
            {//console.log("response",res.data);
            setProductList(res.data);
           // console.log(productList)
            }
            )
        .catch((error)=>
            {console.log("Error.in loading")})

    }

    // productList.map(p=>console.log("Pro name:",p.pname))

    const deleteProduct=(pid)=>
    {
        ProductService.deleteProduct(pid)
        .then((res)=>{
            console.log("response",res.data);
        setMessage("Product is Successfully deleted.",pid)
        init();   //To display updated Values
        }
        )
        .catch((error)=>console.log("Error in deletion"))

    }



  return (
    <>
    {
    console.log(productList)}
    <div className="container-fluid">
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <div className="card ext-left">
            <div className="card-header">
                Display All Product
                {
                    msg &&
                    <p className='fs-4 text-center text-success'>{msg}</p>
                }
            </div>
                <div className="card-body">

                <table className="table table-hover">
                <thead>
                        <tr >
                        <th>Sr.No.</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Manufacturer</th>
                        <th>Warranty</th>
                        <th>Price</th>
                        <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((pr,num)=>(

                            <tr key={num+1}>
                            <td>{num+1}</td>
                            <td>{pr.pid}</td>
                            <td>{pr.pname}</td>
                            <td>{pr.pdescription}</td>
                            <td>{pr.pmanufacturer}</td>
                            <td>{pr.pwarrantydate}</td>
                            <td>{pr.pprice}</td>

                            <td>
                            <span>
                                 <Link to={'/editProduct/'+pr.pid} className="btn btn-sm btn-success" >Edit</Link>

                                 <button onClick={()=>{console.log(pr.pid);deleteProduct(pr.pid)}} className="btn btn-sm btn-danger ms-1" >Delete</button>
                                 </span>
                            </td>
                            </tr>

                        )


                        )}


                    </tbody>
                    </table>

                </div>
            </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home