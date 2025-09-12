import React, { Fragment } from 'react'
import Headerpage from '../sharecomponents/Headerpage';
import Sidebarpage from '../sharecomponents/Sidebarpage';
import { Outlet } from 'react-router-dom'

function Mainpage() {
  return (
    <Fragment>
      <Headerpage></Headerpage>
    <div className='container-fluid'>
      <div className='row'>

        <div className='col-md-2 border'>
          <Sidebarpage></Sidebarpage>
        </div>
          <div className='col-md-10 border' style={{height:'90vh'}}>
          <Outlet></Outlet>
        </div>
        

      </div>
    </div>
    </Fragment>
  )
}

export default Mainpage