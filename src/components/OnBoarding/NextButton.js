import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
     
 import Icon from 'react-native-vector-icons/Ionicons';
 import { ContainerButton, Button } from './styles';
 import { Svg, Circle, LinearGradient,Stop } from 'react-native-svg';

export default function OnBoardingItem({ percentage, scrollTo }) {

    const size = 120;
    const strokeWidth = 2;
    const center = 5;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef( new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = ( toValue ) => {

        return Animated.timing(progressAnimation, {

            toValue,
            duration: 250,
            useNativeDriver: true

        }).start();
    }

    useEffect(() => {

        animation(percentage);

    },[ percentage ]);


    useEffect(() => {

        progressAnimation.addListener(

        ( value ) => {
            
                const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if(progressRef?.current) {

                progressRef.current.setNativeProps({
                    strokeDashoffset
                });
            }
        },
        [ percentage ] 
    );

    return ()  => {

        progressAnimation.removeAllListeners();
        
    }
        
    },[]);


    return (
        <ContainerButton> 
            <Svg height="100" width="100">
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                    <Stop offset="0" stopColor="#22DDF2" stopOpacity="0.5" />
                    <Stop offset="1" stopColor="#D91193" stopOpacity="0.5" />
                    </LinearGradient>

                    <Circle cx="42" cy="60" r="40" fill="url(#grad)"/>
                    <Circle cx="58" cy="60" r="40" fill="url(#grad)" />
                    <Circle cx="50" cy="50" r="40" fill="url(#grad)" />
                    </Svg>
                <Button onPress={ scrollTo }>
                    <Icon 
                        name={ 'arrow-forward-outline' }
                        size={35}
                        color='#FFF'
                        />
                </Button>
        </ContainerButton>
    )
}


