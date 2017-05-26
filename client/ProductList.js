const React = require('react')
const { Card, Icon, Image } = require('semantic-ui-react')

function ProductList(props) {
  const products = props.productList
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        {products.map((product, i) => (
          <Card
            key={i}
            image={product.image}
            header={product.productName}
            meta={product.price}
            description={product.description}
            />
        ))}
      </Card.Group>
    </div>
  )
}

module.exports = ProductList
