import styled from 'styled-components/native';
import { colors } from '../../styles/colors';
export const Container = styled.View`
  flex:1;
  margin-left:10px;
  margin-right:10px;
  justify-content:center;
  align-items:flex-start;
`;

export const CapaMusica = styled.Image.attrs({
  resizeMode: 'contain'
})`
  background-color: transparent;
`;

export const TitleMusic = styled.Text`
  font-size:15px;
  color:${ colors.branco };
  font-weight:bold;
  font-family: LexendDeca-VariableFont_wght;
`;
