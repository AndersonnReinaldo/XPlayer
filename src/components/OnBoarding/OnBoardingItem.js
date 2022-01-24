import React from 'react'
import { useWindowDimensions } from 'react-native'
import { ContainerDescription, Title, Subtitle, ImagemOnBoard } from './styles';

export default function OnBoardingItem({data}) {

    const { width } = useWindowDimensions();

    return (
        <ContainerDescription style={{ width }}> 
           <ImagemOnBoard source={data.imagem}/>
                <Title>{data.title}</Title>
                <Subtitle>{data.description}</Subtitle>
        </ContainerDescription>
    )
}
