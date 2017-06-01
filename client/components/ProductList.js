const React = require('react')
const { Card, Icon, Image } = require('semantic-ui-react')

function handleDetailPage(event) {
  const id = event.currentTarget.id
  
}

function ProductList(props) {
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        {props.products.map((product, i) => (
          <Card
            id={i}
            key={i}
            image={product.image}
            header={product.productName}
            meta={product.price}
            description={product.description}
            onClick={handleDetailPage}
            />
        ))}
      </Card.Group>
    </div>
  )
}

module.exports = ProductList
