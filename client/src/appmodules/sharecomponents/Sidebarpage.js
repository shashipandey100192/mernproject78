import React from 'react'
import { Link } from 'react-router-dom'

function Sidebarpage() {
    return (
        <div className="flex-shrink-0 p-3">
            <Link to="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                <span className="fs-5 fw-semibold">Collapsible</span> </Link>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        Home
                    </button>
                    <div className="collapse" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/dashboard" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Home</Link></li>
                            <li><Link to="landing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard</Link></li>
                            <li><Link to="employeelist" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Employee</Link></li>
                            <li><Link to="chart" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Graph</Link></li>
                            <li><Link to="props" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Props</Link></li>
                            <li><Link to="lazypage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Lazyloading</Link></li>
                             <li><Link to="telwind" className="link-body-emphasis d-inline-flex text-decoration-none rounded">telwind</Link></li>
                             <li><Link to="mui" className="link-body-emphasis d-inline-flex text-decoration-none rounded">muipage</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Sidebarpage