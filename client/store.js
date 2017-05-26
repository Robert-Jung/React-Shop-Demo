const Redux = require('redux')

const products = function productList(state = [], action) {
  switch(action.type) {
    case 'LOAD_PRODUCTS':
      return action.products
    default:
      return state
  }
}

const reducer = Redux.combineReducers({ products })

const store = Redux.createStore(reducer)

window.store = store

module.exports = store
