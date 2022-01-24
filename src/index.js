import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import OnBoard from './components/OnBoarding'
import { Home,Player } from './screens';

const App = () => {
  return(
  <>
    <StatusBar 
      barStyle='light-content'
      translucent
      backgroundColor='transparent' />
      
    <Home/>
  </>
  )
}

export default App;