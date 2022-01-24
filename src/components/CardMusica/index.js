import React from 'react';

import { Container,CapaMusica, TitleMusic } from './styles';

const CardMusica = ({item}) => {
    console.log(item)
  return (
      <Container>
          <CapaMusica source={item.imagem}/>
          <TitleMusic>{item.nomeMusica}</TitleMusic>
      </Container>
  )
}

export default CardMusica;