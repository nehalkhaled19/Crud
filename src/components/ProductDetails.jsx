import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const {productId} =useParams()
  const [product, setProduct] = useState([])
  const apiLink = 'http://localhost:3000/products'

  // get data
  useEffect(() => {
    fetch(apiLink).then((respons) => respons.json()).then((data) => {
        setProduct(data[productId]);
      return  console.log(product)
})
  }, [])

  return (
         <div>
            {product? <div className="row  mt-5">
                <div className="col-md-3 ">
                         <div key={product.title} className='item p-3'>
                                <img src={product.image} className='w-100' alt={product.category} />
                            </div>
        
                </div>
                <div className="col-md-9 px-3 bg-light d-flex align-items-center">
                    <div >
                        <h3>{product.title}</h3>

                        <p className='text-muted'>{product.description}</p>

                        {/* <span className='text-main font-sm fw-ligther'>{product.category.slug}</span> */}

                        <div className=' w-100 mt-3  d-flex justify-content-between'>
                            <span className='font-sm'> {product.price} $</span>
                            <span className='font-sm'>
                                {product.rating?.rate}
                                <i className='fa-solid ms-1 fa-star ' style={{color:'yellow'}}></i>
                            </span>
                        </div>

                    </div>
                </div>
            </div> : ""}
    </div>
  )
}


