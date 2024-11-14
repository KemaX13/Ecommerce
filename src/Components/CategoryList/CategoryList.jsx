import './CategoryList.css'
import ProductCard from '../ProductCard/ProductCard'

function CategoryList({ cardArray }) {
  return (
    <>
      {cardArray.map((card) => {
        const { id, name, category, price, imageUrl } = card;

        return (
          <ProductCard key={id}
            card={{
              nameCard: name,
              categoryCard: category,
              priceCard: price,
              imgCard: imageUrl
            }}
          />
        );
      })}
    </>
  )
}

export default CategoryList