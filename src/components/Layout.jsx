import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'
export default function Layout() {
    return <>
        <Nav />
        <div className="row">
            <div className="col-md-2 vh-100 bg-light py-2">
                <div className="list-group">

                    <Link to='categories' className="list-group-item list-group-item-action list-group-item-danger border-0">Get all Categories</Link>
                    <Link to='products' className="list-group-item list-group-item-action list-group-item-success border-0">Get All Products</Link>
                </div>
            </div>
            <div className="col-md-10">
                <Outlet />
            </div>
        </div>
    </>
}
