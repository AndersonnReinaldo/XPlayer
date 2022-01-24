import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  flex-direction:row;
  align-items:center;
  padding-left:10px;
  padding-right:10px;
  background-color:${ colors.colorInput };
  border-radius:50px;
  margin-top:20px;
`;

export const Input = styled.TextInput.attrs({
  placeholder:'Música ou artista',
  placeholderTextColor:colors.neutral,
  selectionColor:colors.rosa
})`
  flex:1;
  color:${colors.neutral}
`