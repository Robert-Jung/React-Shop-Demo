const React = require('react')
const ProductList = require('./ProductList')
const MainHeader = require('./Header')

const App = (props) => {
  return (
    <div>
      <MainHeader />
      <ProductList {...props} />
    </div>
  )
}

module.exports = App
