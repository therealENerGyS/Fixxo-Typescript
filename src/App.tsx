import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.min.css'
import HomeView from './views/HomeView'
import CategoriesView from './views/CategoriesView'
import ProductsView from './views/ProductsView'
import ContactsView from './views/ContactsView'
import NotFoundView from './views/NotFoundView'
import SearchView from './views/SearchView'
import CompareView from './views/CompareView'
import WishListView from './views/WishListView'
import ShoppingCartView from './views/ShoppingCartView'
import ProductDetailsView from './views/ProductDetailsView'
import { ProductProvider } from './contexts/ProductContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/categories' element={<CategoriesView />} />
            <Route path='/products' element={<ProductsView />} />
            <Route path='/products/:name' element={<ProductDetailsView />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path='/search' element={<SearchView />} />
            <Route path='/compare' element={<CompareView />} />
            <Route path='/wishlist' element={<WishListView />} />
            <Route path='/shopping-cart' element={<ShoppingCartView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;