const React = require('react')
const { Card, Icon, Image } = require('semantic-ui-react')

const TestCard = (props) => {
  return (
    <Card>
      <Image src='https://semantic-ui.com/images/avatar2/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          {props.text}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
          </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}

module.exports = TestCard
