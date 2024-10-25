import './Header.css'

function Header({ leftElem, rightElem}) {
  const leftElmts = [{ leftElem }]
  const rightElmts= [{ rightElem }]

  return (
    <header className='header'>
      <div className='leftColumn'>{ leftElmts }</div>
      <div className='rightColumn'>{ rightElmts }</div>
    </header>
  )
}

export default Header