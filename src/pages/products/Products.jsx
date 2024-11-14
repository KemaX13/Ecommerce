import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from '../../services/ApiProductsService'
import TwoColumns from '../../Components/TwoColumns/TwoColumns'
import Links from '../../Components/Links/Links'
import CategoryList from '../../Components/CategoryList/CategoryList'

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProductsFromService = async () => {
    const response = await getAllProducts();
    setProducts(response)
  }
console.log(products)
  useEffect(() => {
    getAllProductsFromService()
  }, [])

  const ddMenuIcon = <Links imgPath='./img/ddMenu.png'
    altImg='DdMenuIcon'
    param='img' />

  const logoIcon = <Links url='/'
    text='Logo'
    param='text' />

  const userIcon = <Links imgPath='./img/user.png'
    altImg='UserIcon'
    param='img' />

  const cartIcon = <Links imgPath='./img/cart.png'
    altImg='CartIcon'
    param='img' />

  const lElemH = [ddMenuIcon, logoIcon]
  const rElemH = [userIcon, cartIcon]

  return (
    <>
      <header className='header twoColumns'><TwoColumns leftElmts={lElemH} rightElmts={rElemH} /></header>
      <section className='categoryList'><CategoryList cardArray={products} /></section>
      {/* <Link to={"/create-product"}><button>Añadir producto</button></Link> */}
    </>
  )
}

export default Products
