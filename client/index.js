const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ProductList = require('./components/ProductList')
const MainHeader = require('./components/Header')
const { productsLoaded } = require('./actions')

const App = (props) => {
  return (
    <div>
      <MainHeader />
      <ProductList {...props} />
    </div>
  )
}

const render = () => {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

  ReactDOM.render(<App {...currentState}/>, $root)
}

store.subscribe(render)

render()

fetch('/products')
  .then(res => res.json())
  .then(products => {
    store.dispatch(productsLoaded(products))
  })
