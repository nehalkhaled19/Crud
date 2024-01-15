import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/Products'
import Category from './components/Category'
import Layout from './components/Layout'

export default function App() {
  let roots = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: 'products', element: <Products /> },
        { index: true, element: <Home /> },
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
