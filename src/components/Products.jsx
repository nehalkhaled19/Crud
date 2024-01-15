import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  const apiLink = 'http://localhost:3000/products'
  const [products, setProducts] = useState([])

  // get data
  useEffect(() => {
    getData()
  }, [])
 function getData(){
  fetch(apiLink).then((respons) => respons.json()).then((data) => setProducts(data))

 }

  // to delete
  function deleteProduct(id) {
    fetch(`${apiLink}/${id}`,{method: 'delete'}).then((respons) => respons.json()).then((data) => getData() )

  }
  
  return <>
    <div className='d-flex p-3 mb-4 w-100 justify-space-between align-items-center'>
      <h1 className='d-inline'>Products List</h1>
      <Link className='ms-auto' to='add'>
        <button className='btn btn-success btn-lg text-end px-4 py-2'>Add Product +</button>
      </Link>
    </div>
    <table className="table table-striped table-bordered">
      <thead>
        <tr >
          <th className='text-center' >Id</th>
          <th  >Product</th>
          <th className='text-center' >Price</th>
          <th className='text-center' >          Operation   </th>
        </tr>
      </thead>
      <tbody>
        {products?.map((e) => {
          return <tr key={e.id}>
            <th className='text-center' >{e.id}</th>
            <td>{e.title}</td>
            <td className='text-center'>{e.price}</td>
            <td className='text-center'>
              <button className='btn btn-danger btn-sm' onClick={() => deleteProduct(`${e.id}`)}>Delete</button>
              <Link to={`${e.id}`}>
                <button className='btn btn-info btn-sm mx-3'>View</button>
              </Link>
              <button className='btn btn-warning btn-sm'>Edit</button>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}
