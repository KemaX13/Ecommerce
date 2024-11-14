import TwoColumns from './Components/TwoColumns/TwoColumns'
import Links from './Components/Links/Links'

function App() {
  const gitHub = <Links imgPath='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
    altImg='GitHub'
    url='https://github.com/'
    text='GitHub'
    param='both' />

  return (
    <header className='header twoColumns'><TwoColumns leftElmts={gitHub} rightElmts={null} /></header>
  )
}

export default App
