import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProducts() {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const nav = useNavigate()
    function handleSumbite(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/products', {
            title,
            price
        }).then((data) => nav('../'))
    }
    return <>
        <h1>Add New Product</h1>
        <form onSubmit={handleSumbite}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Product Title" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Price:</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Product Price" />
            </div>
            <button className='btn btn-info' type='submit'>Sumbit</button>

        </form>
    </>
}
