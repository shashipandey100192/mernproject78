import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
   <div className='container-fluid bg-danger' style={{height:'90vh'}}>
    <div className='row'>
        <div className='col-12 text-center'>
            <h1>404</h1>
            <h3>Not Found Page</h3>
            <Link to="/" className='btn btn-success'> Back to Login</Link>
    </div>
   </div>
   </div>
  )
}

export default Errorpage