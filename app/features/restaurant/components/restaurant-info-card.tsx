import React from 'react'
import styled from 'styled-components/native'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'

import star from '../../../assets/images/star'
import open from '../../../assets/images/open'

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};

`

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const Rating = styled.View`
  flexDirection: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`

const Row = styled.View`
  flexDirection: row;
  justify-content: space-between;
`

const Closed = styled.Text`
  color: ${(props) => props.theme.colors.text.error}
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = "Some Restaurant",
        icon,
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false,
      } = restaurant;

      const ratingArray = Array.from(new Array(Math.ceil(rating)))

    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0]}}/>
            <Info>
                <Title>{name}</Title>
                <Row>
                  <Rating>
                    {ratingArray.map(() => (
                      <SvgXml xml={star} width={20} height={20}/>
                    ))}
                  </Rating>
                  {isClosedTemporarily ? (
                    <Closed>CLOSED TEMPORARILY</Closed>) : <SvgXml xml={open} width={20} height={20}/>
                  }
                  
                </Row>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}