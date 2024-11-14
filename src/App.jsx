import TwoColumns from './Components/TwoColumns/TwoColumns'
import Links from './Components/Links/Links'

function App() {
  const logoIcon = <Links url='/'
    text='Logo'
    param='text'/>

  const userIcon = <Links imgPath='./img/user.png'
    altImg='UserIcon'
    param='img'/>

  const cartIcon = <Links imgPath='./img/cart.png'
    altImg='CartIcon'
    param='img'/>

  const rElemH = [userIcon, cartIcon]

  return (
    <header className='header twoColumns'><TwoColumns leftElmts={ logoIcon } rightElmts={ rElemH } /></header>
  )
}

export default App
