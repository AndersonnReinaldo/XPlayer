import React from 'react';
import {InputSearch} from '../../components';
import { listaReproducao, listaFavoritos } from '../../utils/dataMusic';
import Icon from 'react-native-vector-icons/Ionicons'
import { 
    Container,
    Header,
    ListaReproducao,
    ListaMusicas,
    Favoritos,
    Title,
    HeaderActions,
    TitleHeaders,
    ListaMusicasFavoritas
   } from './styles';
import { CardMusica, ItemMusica,ButtonCurrentMusic }  from '../../components';
import { colors } from '../../styles/colors';

const Home = () => {
  return (
        <Container>
            <Header>
              <Title>Biblioteca</Title> 
              <InputSearch/>   
            </Header>

            <ListaReproducao>
              <HeaderActions>
                <TitleHeaders>Listas de reprodução</TitleHeaders>
                <Icon name='chevron-forward-outline' size={25} color={colors.accent}/>
              </HeaderActions>
              <ListaMusicas
                data={listaReproducao}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {return <CardMusica item={item}/>}}
              />
            </ListaReproducao>
            <Favoritos>
              
            <HeaderActions>
                <TitleHeaders>Favoritos</TitleHeaders>
                <Icon name='chevron-forward-outline' size={25} color={colors.accent}/>
              </HeaderActions>
              <ListaMusicasFavoritas
                data={listaFavoritos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {return <ItemMusica item={item}/>}}
              />

              {1 == 1 && <ButtonCurrentMusic/>} 
          
            </Favoritos>
            
        </Container>
  )
}

export default Home;