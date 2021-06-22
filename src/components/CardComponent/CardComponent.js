import React from 'react'
import { Card, Image } from 'semantic-ui-react'

//DIFERENTES MANERAS DE PASAR LAS PROPS - 2DA: ESTA ES LA MAS BONITA
const CardComponent = ({img, name, description}) => (
  <Card>
    <Image src={img} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
)

export default CardComponent