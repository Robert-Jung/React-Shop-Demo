const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ProductList = require('./ProductList')

function App(props) {
  return (
    <div>
      <ProductList productList={ props.products } />
    </div>
  )
}

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

  ReactDOM.render(<App {...currentState}/>, $root)
}

fetch('/products')
  .then(res => res.json())
  .then(products => {
    store.dispatch({ type: 'LOAD_PRODUCTS', products })
  })

store.subscribe(render)

render()
