import React from 'react';

import {
     Container,
     ContainerItem,
     ContainerIcon,
     ContainerDescricao,
     ButtonFavorited,
     NomeMusica,
     NomeAutor,
     IconMusic
     } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/colors';

const ItemMusica = ({item}) => {
    
  return (
      <Container>
          <ContainerItem>
            <ContainerIcon>
                <IconMusic/>
            </ContainerIcon>
            <ContainerDescricao>
                <NomeMusica>{item.nomeMusica}</NomeMusica>
                <NomeAutor>{item.nomeAutor}</NomeAutor>
            </ContainerDescricao>
            <ButtonFavorited>
                <Icon name='heart-outline' size={25} color={colors.rosa}/>
            </ButtonFavorited>
          </ContainerItem>
      </Container>
  )
}

export default ItemMusica;