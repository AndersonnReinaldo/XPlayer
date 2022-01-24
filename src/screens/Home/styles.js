import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../styles/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('screen');
 
export const Container = styled.SafeAreaView.attrs({
    padding: getStatusBarHeight()
})`
  flex:1;
  background-color:${ colors.primary };
  padding: 20px;
`;

export const Header = styled.View.attrs({
    paddingTop: getStatusBarHeight()

})`
    flex-direction:column;
    background: transparent;
    height: ${height / 5}px;
`
export const ListaReproducao = styled.View`
    flex:1;

`
export const HeaderActions = styled.TouchableOpacity.attrs({
    activeOpacity: 0.85
})`
    justify-content:space-between;
    width: 100%;
    align-items:center;
    flex-direction:row;
    margin-bottom:15px
`

export const TitleHeaders = styled.Text`
    font-size:22px;
    font-weight:200;
    color:${colors.branco};
    font-family: LexendDeca-VariableFont_wght;
`

export const Favoritos = styled.View`
    flex:1;

`
export const HeaderFavoritos = styled.TouchableOpacity.attrs({
    activeOpacity: 0.85
})`
    flex:1;
    justify-content:space-between;
    width: 100%;
    align-items:center;
    flex-direction:row;
`

export const Title = styled.Text`
    font-size:30px;
    font-weight:600;
    color:${colors.rosa};
    font-family: LexendDeca-VariableFont_wght;
`

export const ListaMusicas = styled.FlatList.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator: false
})``

export const ListaMusicasFavoritas = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})``