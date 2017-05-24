const Redux = require('redux')

const test = function testList(state = [], action) {
  switch(action.type) {
    case 'TEST_WORKING':
      return action.text
    default:
      return state
  }
}

const reducer = Redux.combineReducers({ test })

const store = Redux.createStore(reducer)

window.store = store

module.exports = store
