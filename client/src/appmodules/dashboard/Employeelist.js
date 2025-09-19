import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import {Link} from 'react-router-dom';


function Employeelist() {

    const [employee ,updateemployee]=useState([]);

    const allemp = ()=>{
            axios.get("http://localhost:8800/allworker").then((emp)=>{
                updateemployee(emp.data.alldatalist);
                console.log(emp);
            })
    }

useEffect(()=>{
    allemp();
},[]);


const empdelete = (id)=>{
    console.log(id);
    axios.delete(`http://localhost:8800/deleteemp/${id}`).then((r)=>{
        console.log(r);
        if(r.data.status===101)
        {
            alert(r.data.msg);
            allemp();
        }
    })
}

    return (

        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card p-3 bg-light shadow cusscroll'>
                        <h4 className='p-3'>Employee List</h4>
                        <table class="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Profile Pic</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Hra 10%</th>
                                    <th scope="col">City</th>
                                    <th scope="col" style={{minWidth:200}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.map((emp)=>{
                                    return(
                                           <tr>
                                    <th scope="row">{emp._id}</th>
                                    <td>name</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.gender}</td>
                                    <td>{emp.dob}</td>
                                    <td>
                                        <img src={emp.pic} alt={emp._id} width={50}/>
                                    </td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Link to={"edituser/"+emp._id}  className='btn ms-2 btn-sm btn-warning'>Edit</Link>
                                        <Link to={"userinfo/"+emp._id} className='btn ms-2 btn-sm btn-info'>View</Link>
                                        <button className='btn ms-2 btn-sm btn-danger' onClick={()=>empdelete(emp._id)}>Del</button>
                                    </td>
                                    
                                </tr> 
                                    )
                                })}

                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employeelist