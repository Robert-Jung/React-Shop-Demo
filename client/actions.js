const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

const productsLoaded = products => ({
  type: LOAD_PRODUCTS,
  products
})

const Actions = {
  LOAD_PRODUCTS,
  productsLoaded
}

module.exports = Actions
