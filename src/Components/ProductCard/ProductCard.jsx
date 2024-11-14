import './ProductCard.css'

function ProductCard({ card: { nameCard, categoryCard, priceCard, imgCard } }) {
  return (
    <section className='card'>
      <div className='img'><img src={imgCard} alt={nameCard} /></div>
      <div className='product-card'>
        <h2 className='product-cardName'>{nameCard}</h2>
        <p className='product-cardCategory'>{categoryCard}</p>
        <p className='product-cardPrice'>{priceCard}</p>
      </div>
    </section>
  )
}

export default ProductCard