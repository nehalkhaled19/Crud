import React from 'react'
import Home from './components/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/Products'
import Category from './components/Category'
import Layout from './components/Layout'
import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'

export default function App() {
  let roots = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products />},
        {path:'products/add',element:<AddProducts></AddProducts>},
        { path: 'products/:productId', element: <ProductDetails /> },
        { path: 'categories', element: <Category /> }
      ]
    },
  ])
  return <>
    <RouterProvider router={roots}>
      <Home />
    </RouterProvider>

  </>
}
