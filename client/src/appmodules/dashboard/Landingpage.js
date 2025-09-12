import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Reactcharts from './Reactcharts.js';

function Landingpage() {
    const [mydata, setmydate] = useState({})
    const [a,b]=useState([]);

    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            console.log(d.data);
            setmydate(d.data);
            b(d.data.products);
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
                            <h5 className="card-title">Total Products</h5>
                            <h1>{mydata.total}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Skip value </h5>
                            <h1>{mydata.skip}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-warning mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Limit Data </h5>
                           <h1>{mydata.limit}</h1>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Current Data</h5>
                           <h1>{a.length}</h1>
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