import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import SCurrentPageLocation from "../sections/SCurrentPageLocation";
import SFooter from "../sections/SFooter";
import SMainMenu from "../sections/SMainMenu";
import SProductDiscount from "../sections/SProductDiscount";
import SProductDetails from "../sections/SProductDetails";
import { useProductContext } from '../contexts/ProductContext'

const ProductDetailsView = () => {
const {id} = useParams()
const {product, getProduct} = useProductContext()

useEffect(() => {
  getProduct(id)
}, [])
  return (
    <>
      <SMainMenu />
      <SProductDiscount />
      <SCurrentPageLocation currentPage="Product" />
      <SProductDetails item={product} />
      <SFooter />
    </>
  );
};

export default ProductDetailsView;
