import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:transparent;
    margin-top:10px;
`;
export const ContainerItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    flex:1;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:transparent;
`;

export const ContainerIcon = styled.View`
    flex-direction:row;
    height:50px;
    width:50px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    background-color:${ colors.sematic };
`;

export const ContainerDescricao = styled.View`
    flex:1;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding-left: 10px;
`;

export const ButtonFavorited = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    justify-content:center;
    align-items:center;
`;

export const NomeMusica = styled.Text.attrs({
    numberOfLines:1
})`
    font-size:15px;
    color:${ colors.branco};
    font-weight:500;
    font-family: LexendDeca-VariableFont_wght;
`;

export const NomeAutor = styled.Text`
    font-size:12px;
    color:${ colors.neutral};
    font-weight:400;
    font-family: LexendDeca-VariableFont_wght;
`;

export const IconMusic = styled.Image.attrs({
    source: require('../../assets/images/music.png')
})`

`
