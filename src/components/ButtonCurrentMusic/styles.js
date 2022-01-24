import styled from "styled-components";
import { colors } from "../../styles/colors";

export const BtnCarrinho = styled.TouchableOpacity.attrs({
  activeOpacity: 0.98
})`
  flex-direction:row;
   position:absolute;
  align-items: center;
  justify-content: space-between;
  background-color: ${ colors.sematic};
  width: 100%;
  height: 80px;
  border-radius: 50px;
  margin-top: 20px;
  z-index: 9999;
  top: 50%;
  elevation:10;
  padding-right:10px;
  padding-left:20px;
`;


export const ContainerButton = styled.View`
    flex: 1;
    align-items:center;
    justify-content:center;
`
export const ButtonPlay = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  position: absolute;
  background-color:transparent;
  justify-content:center;
  align-items:center;
  
`
export const ContainerDescricao = styled.View`
    flex:2;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding-left: 10px;
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

export const ContainerIcon = styled.View`
    flex-direction:row;
    height:50px;
    width:50px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
`;