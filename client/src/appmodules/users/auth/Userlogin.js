import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Userlogin() {
    const mynav = useNavigate();

    const [login, updatelogin] = useState({
        email: "",
        pass: ""
    })


    const updatefield = (e) => {
        const { name, value } = e.target;
        updatelogin((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }

    const validationlogin = async () => {
        if (login.email === "" || login.pass === "") {
            toast.warning("your email and password is blank", { position: "top-left", theme: "dark", autoClose: 2000 });
        }
        else {
           await axios.post("http://localhost:8800/userlogin", login).then((d) => {
                console.log(d);
                if (d.data.status === 421) {
                    toast.error(d.data.msg);
                }
                if (d.data.status === 320) {
                    toast.error(d.data.msg, { position: "top-left", theme: "dark", autoClose: 2000 });
                }
                if (d.data.status === 200) {
                    localStorage.setItem("settoken",d.data.mytoken);
                    toast.success("successfully login ", { position: "top-left", theme: "dark", autoClose: 2000 });
                    setTimeout(() => {
                        mynav("/dashboard");
                    }, 2000)
                }
                

            })

        }
    }



    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <ToastContainer />
                                <p className='h3 mb-3'>Logon page</p>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" name='email' value={login.email} onInput={updatefield} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" name='pass' value={login.pass} onInput={updatefield} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">

                                    <input type="button" class="btn btn-success" value="submit" onClick={validationlogin} />
                                    <Link to="registor" className='ms-5'>Registor now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin