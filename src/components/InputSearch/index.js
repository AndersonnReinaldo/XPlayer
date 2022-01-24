
import React from 'react';

import { Container,Input } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/colors';

const InputSearch = () => {

  return (
      <Container>
        <Icon name='search' color={colors.neutral} size={18}/>
          <Input/>
      </Container>
  )
}

export default InputSearch;