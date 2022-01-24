import React, {useState} from 'react'
import { BtnCarrinho, ContainerDescricao, ContainerButton,ButtonPlay,NomeMusica,NomeAutor,ContainerIcon } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/colors';
import { Svg, Circle, LinearGradient,Stop } from 'react-native-svg';

export default function ButtonCurrentMusic({  placeholder, totalValor,onPress, }){

    const [statusPlayer, setStatusPlayer] = useState(false);
     
   
    function handlePlay(){
        setStatusPlayer(!statusPlayer)
    }
   

    

 
    return (
        <BtnCarrinho 
            disabled={false}
            >
                <ContainerIcon>
                    <Icon name='cart' size={40} color={ colors.primary }/>
                </ContainerIcon>
        <ContainerDescricao>
            <NomeMusica>Thunder</NomeMusica>
            <NomeAutor>Imagine Dragon</NomeAutor>
        </ContainerDescricao>

            <ContainerButton> 
            <Svg height="100" width="100">
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                    <Stop offset="0" stopColor="#22DDF2" stopOpacity="0.5" />
                    <Stop offset="1" stopColor="#D91193" stopOpacity="0.5" />
                    </LinearGradient>

                    <Circle cx="42" cy="60" r="25" fill="url(#grad)"/>
                    <Circle cx="58" cy="60" r="25" fill="url(#grad)" />
                    <Circle cx="50" cy="50" r="25" fill="url(#grad)" />
                    </Svg>
            
                <ButtonPlay  onPress={() => handlePlay()}>
                
                    <Icon 
                        name={ statusPlayer ? 'play-outline' : 'pause-outline' }
                        size={35}
                        color='#FFF'
                        />
                </ButtonPlay>
        </ContainerButton>
        </BtnCarrinho>
    )
}
