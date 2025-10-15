import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import axios from 'axios';
import { baseurl } from './sharecomponents/Myservisce';


function Welcomepage() {

    const [appmenu, setappment] = useState([]);

    const appment = async () => {
        await axios.get(`${baseurl}/applist`).then((d) => {
            setappment(d.data.applist);
            // console.log(d.data.applist);
        })
    }

    useEffect(() => {
        appment();
    }, []);



    return (
        <div className='container myapp'>
            <div className='row'>
                <div className='col-12 text-center p-3'>
                    <h3>App List Page</h3>
                </div>
                {appmenu.map((m) => {
                    return (
                        <div className='col-md-3 text-center mt-3'>
                            <Link to={m.applink} className='card shadow p-3'>
                                <h1><FaUserAlt /></h1>
                                <h5>{m.appname}</h5>
                            </Link>
                        </div>
                    )
                })}

                {/* <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3 text-center mt-3'>
                    <Link to="#" className='card shadow p-3'>
                        <h1><FaUserAlt /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Welcomepage