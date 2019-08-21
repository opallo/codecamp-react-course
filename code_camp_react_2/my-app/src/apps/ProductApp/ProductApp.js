import React from 'react'
import Product from './components/Product.js'
import products from './data/products.js'

export default function ProductApp() {

  const productComponents = products.map(product => {
    return(
      <Product key={product.id} name={product.name} description={product.description} price={product.price} />
    )
  })

  return (
    <div>
      {productComponents}
    </div>
  )
}