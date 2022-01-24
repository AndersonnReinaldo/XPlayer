import React,{ useState, useRef, useContext } from 'react'
import {
     FlatList,
     Animated
} from 'react-native'

import { Container, ContainerList } from './styles';

import { dataOnBoarding } from '../../utils/dataOnBoarding';
import Paginator from './Paginator';
import OnBoardingItem from './OnBoardingItem';
import NextButton from './NextButton';

export default function OnBoarding() {

    const [currentIndex, setCurrentIndex] = useState(1);
    
    const scrollX = useRef( new Animated.Value(0)).current;
    
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {

        setCurrentIndex(viewableItems[0].index);

    }).current;

    const scrollTo = async () => {

        if(currentIndex < dataOnBoarding.length - 1){

            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });

        }else{
            try {

                storageOnBoarding(true)
                
            } catch (err) {

                console.log('Error @setItem: ', err)
            } finally {

                setLoading(true);
            }   
        }
    }

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <Container > 
            
                  <ContainerList>
                        <FlatList

                        keyExtractor={ (item) => item?.id}
                        data={dataOnBoarding}
                        renderItem={({item}) => <OnBoardingItem data={item}/>}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}],{ 
                            useNativeDriver: false 
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={ viewableItemsChanged}
                        viewabilityConfig={ viewConfig }         
                        ref={slidesRef}       
                    />
                </ContainerList>
                
                    {/* <Paginator data={ dataOnBoarding } scrollX={ scrollX }/> */}
                    <NextButton
                        scrollTo={ scrollTo }
                        percentage={ (currentIndex + 1) * (100 / dataOnBoarding.length) }
                        />
        </Container>
    )
}
