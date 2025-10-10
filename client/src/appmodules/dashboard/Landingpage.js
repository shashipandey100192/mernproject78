import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Reactcharts from './Reactcharts.js';
import { baseurl } from '../sharecomponents/Myservisce.js';

function Landingpage() {
    const [mydata, setmydate] = useState({})
    const [emp_g, sumemp_g]=useState([]);

    const myapi = () => {
        axios.get(`${baseurl}/allworker`).then((d) => {
            console.log(d.data.alldatalist);
            setmydate(d.data.alldatalist);
            const g = d.data.alldatalist.map((gn)=>{
                return gn.gender
            });
            sumemp_g(g);
            
        })
    }

    useEffect(() => {
        myapi();
    }, [])



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card text-bg-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total Employee</h5>
                            <h1>{mydata.length}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Male Employee </h5>
                            {/* <h1>{emp_g.length}</h1>
                            <h1>{emp_g==="male" ? emp_g.length : "no"}</h1> */}
                            <h1>{emp_g.length!==0 ? emp_g.filter((m)=>{return m=="Male"}).length:"po" }</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-warning mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Female Employee </h5>
                           <h1>{emp_g.length!==0 ? emp_g.filter((m)=>{return m=="Female"}).length:"po" }</h1>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Current Data</h5>
                           <h1>{8000}</h1>
                        </div>
                    </div>
                </div>

                <div className='col-md-8'>
                    <div className="card bg-dark mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total </h5>
                            <div style={{width:'100%',height:300}}>
                            <Reactcharts></Reactcharts>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total </h5>
                            <h1>80</h1>
                        </div>
                    </div>
                </div>

                <div className='col-md-12'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total </h5>
                            <h1>80</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Landingpage