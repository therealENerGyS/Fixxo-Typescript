import React, { useEffect } from 'react'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'
import SCurrentPageLocation from '../sections/SCurrentPageLocation'
import SProductGrid from '../sections/SProductGrid'
import { useProductContext} from '../contexts/ProductContext'

const ProductsView = () => {
  const {products, getProducts} = useProductContext()

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <SMainMenu />
      <SCurrentPageLocation currentPage="Products"/>
      <SProductGrid title="Products" items={products} />
      <SFooter />
    </>
  )
}

export default ProductsView