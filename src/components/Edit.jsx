import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    const { productId } = useParams()
    const [pro, setPro] = useState()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const nav = useNavigate()
 
    // get data
    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`).then((respons) => respons.json()).then((data) => setPro(data))

    }, [])


    // handle sumbite
    function handleSumbite(e) {
        e.preventDefault()
        axios.put(`http://localhost:3000/products/${productId}`,
            {
                title,
                price
            }
        ).then(() => nav('/products'))
    }
    return <>
        <h1>Edit Product</h1>
        {pro ? <form onSubmit={handleSumbite}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} defaultValue={pro.title} className="form-control" id="exampleFormControlInput1" placeholder="Product Title" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Price:</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} defaultValue={pro.price} className="form-control" id="exampleFormControlInput1" placeholder="Product Price" />
            </div>
            <button className='btn btn-info' type='submit'>Sumbit</button>

        </form> : ""}
    </>
}
