import React from 'react'
import { 
    View,
    StyleSheet,
    Animated,
    useWindowDimensions
     } from 'react-native'
import { ContainerPaginator, Dot } from './styles';

export default function OnBoardingItem({ data, scrollX }) {

    const { width } = useWindowDimensions();

    return (
        <ContainerPaginator> 
            {data?.map((_, i)  => {
                
                const inputRange = [(i -1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({

                    inputRange,
                    outputRange: [ 10, 20, 10 ],
                    extrepolate: 'clamp'

                });

                const opacity =scrollX.interpolate({

                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrepolate: 'clamp'

                });

                return <Dot style={[ {width: dotWidth, opacity:opacity}]} key={i.toString()}/>;
            })}
        </ContainerPaginator>
    )
}

