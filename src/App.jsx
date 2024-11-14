import TwoColumns from './Components/TwoColumns/TwoColumns'
import Links from './Components/Links/Links'

function App() {
  const ddMenuIcon = <Links imgPath='./img/ddMenu.png'
    altImg='DdMenuIcon'
    param='img'/>

  const logoIcon = <Links url='/'
    text='Logo'
    param='text'/>

  const userIcon = <Links imgPath='./img/user.png'
    altImg='UserIcon'
    param='img'/>

  const cartIcon = <Links imgPath='./img/cart.png'
    altImg='CartIcon'
    param='img'/>

  const lElemH = [ddMenuIcon, logoIcon]
  const rElemH = [userIcon, cartIcon]

  return (
    <header className='header twoColumns'><TwoColumns leftElmts={ lElemH } rightElmts={ rElemH } /></header>
  )
}

export default App
