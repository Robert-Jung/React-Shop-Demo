const Redux = require('redux')
const products = require('./reducers/products')

const reducer = Redux.combineReducers({ products })

const store = Redux.createStore(reducer)

window.store = store

module.exports = store
