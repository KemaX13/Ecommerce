import './TwoColumns.css'

function TwoColumns({ leftElmts, rightElmts }) {
  return (
    <>
      <div className='leftColumn'>{ leftElmts }</div>
      <div className='rightColumn'>{ rightElmts }</div>
    </>
  )
}

export default TwoColumns