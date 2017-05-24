const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const TestCard = require('./TestPage')

function App(props) {
  return (
    <div>
      <TestCard text={props.test} />
    </div>
  )
}

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')
  console.log(currentState)

  ReactDOM.render(<App {...currentState}/>, $root)
}

store.dispatch({
  type: 'TEST_WORKING',
  text: 'Test is Working'
})

store.subscribe(render)

render()
