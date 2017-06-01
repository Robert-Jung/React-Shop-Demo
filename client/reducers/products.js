const { LOAD_PRODUCTS } = require('../actions')

const products = (state = [], action) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return state.concat(action.products)
    default:
      return state
  }
}

module.exports = products
