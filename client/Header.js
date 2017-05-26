const React = require('react')
const { Header, Image } = require('semantic-ui-react')

function MainHeader() {
  return (
    <Header as='h1' textAlign='center'>
      <Image shape='circular' src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
      { '' }React Store
    </Header>
  )
}

module.exports = MainHeader
