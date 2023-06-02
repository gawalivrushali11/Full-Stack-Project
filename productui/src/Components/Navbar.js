import React from 'react'
import { Link } from 'react-router-dom'


import { useState
 } from 'react'
const Navbar = () => {
  const [searchquery,setSearchQuery]=useState()


  console.log("Search",searchquery)
  const handleChange=(e)=>
  {
    setSearchQuery(e.target.value)

  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
        <a className="navbar-brand" href="#">Product Management App</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' className="nav-link" href="#">Home</Link>
          </li>
          <li className="nav-item" style={{width:'150px'}}>
            <Link to='addProduct' className="nav-link" href="#" >Add Product</Link>
          </li>
          <li className="nav-item" style={{width:'150px'}}>
            <Link to='outofwarranty' className="nav-link" href="#" >Out of Warranty</Link>
          </li>
        </ul>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Product</a>
      </li> */}

      <div className='container' style={{ align: 'right' }}>
      <div className="row" style={{ align: 'right' }}>
      <div className="col-sm-8">
        <input type="text" onChange={(e)=>handleChange(e)} value={searchquery} className="form-control" style={{marginLeft:'200px',marginBottom:'3%', width:'70%' }}placeholder="Product Name  or Description or Manufacturer Name" />
      </div>
      <div className="col-sm-3">
        <Link to={'/searchbyquery/'+searchquery} className="btn btn-primary" >Search</Link>

      </div>
    </div>

      </div>




    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </div>
  )
}

export default Navbar