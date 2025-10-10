import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { baseurl } from '../sharecomponents/Myservisce';


function Employeedetailspage() {
    const { id } = useParams();
    const [single, updatesingle] = useState({});
    const employeeinfo = () => {
        axios.get(`${baseurl}/singleemployee/${id}`).then((d) => {
            console.log(d);
            updatesingle(d.data.user);
        })
    }

    useEffect(() => {
        employeeinfo();
    }, []);

    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-12 bg-dark p-2 text-white'>
                    <h4 className='float-start'>Employee Profile</h4>
                    <Link to="/dashboard/employeelist" className='btn btn-success btn-sm float-end'>Back</Link>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className='card p-4 shadow'>
                        <img src={single.pic} alt="sdkfh" />
                    </div>
                </div>
                <div className='col-md-9 mt-3'>
                    <div className='card p-4 shadow'>
                        <h1>Employee Name: {single.name}</h1>
                        <h4>Email Id:{single.email}</h4>
                        <h4>Phone No:{single.phone}</h4>
                        <h4>City:{single.city}</h4>
                        <h4>DOB:{single.dob}</h4>
                        <h4>Gender:{single.gender}</h4>
                        <h4>Salary:{single.salary}</h4>
                        <h4>HRA:{single.hra}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employeedetailspage