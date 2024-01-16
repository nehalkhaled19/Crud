import React from 'react'
import Home from './components/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/Products'
import Category from './components/Category'
import Layout from './components/Layout'
import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'
import LayoutTwo from './components/LayoutTwo'
import Edit from './components/Edit'

export default function App() {
  let roots = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <LayoutTwo />,children:[
          { index: true, element: <Products /> },
          {path:'add',element:<AddProducts></AddProducts>},
          { path: ':productId', element: <ProductDetails /> },
        ]},
        { path: 'categories', element: <Category /> },
        { path: 'edit/:productId', element: <Edit/> }

      ]
    },
  ])
  return <>
    <RouterProvider router={roots}>
      <Home />
    </RouterProvider>

  </>
}
