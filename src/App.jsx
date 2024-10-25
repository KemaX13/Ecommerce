import './App.css'
import Links from './Components/Links/Links'

function App() {
  return (
    <div><Links props= {{
      img: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
      altImg: 'GitHub',
      url: 'https://github.com/',
      text: 'GitHub',
      param: 'both' }}/></div>
  )
}

export default App
