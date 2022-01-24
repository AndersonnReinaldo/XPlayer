import styled from 'styled-components';
import { Animated } from 'react-native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${ colors.primary };
    align-items:center;
    justify-content:center;
`

export const ContainerList = styled.View`
    flex: 3;
    align-items:center;
    justify-content:center;
`
export const ContainerDescription = styled.View`
    flex: 1;
    align-items:center;
    justify-content:center;
`
export const ContainerButton = styled.View`
    flex: 1;
    align-items:center;
    justify-content:center;
`

export const ContainerPaginator = styled.View`
        flex-direction:row;
        height: 64px;
`

export const Title = styled.Text`
    font-size:28px;
    font-weight:bold;
    text-align:center;
    color:${colors.rosa};
    font-family: LexendDeca-VariableFont_wght;
`
export const Subtitle = styled.Text`
    font-size:17px;
    text-align:center;
    font-family: LexendDeca-VariableFont_wght;
`

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    position: absolute;
    background-color:transparent;
    justify-content:center;
    align-items:center;
    
`

export const Dot = styled(Animated.View)`
    height: 10px;
    border-radius: 5px;
    background-color:${colors.branco};
    margin-left:8px;
    margin-right:8px;
`

export const ImagemOnBoard = styled.Image.attrs({
    resizeMode: 'contain'
})`
    flex:0.5;
    justify-content:center;
`