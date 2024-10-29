import React from 'react';
import { styled } from 'styled-components/native'
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { Spacer } from '../../../components/spacer'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value=''/>
      </SearchContainer>
      <FlatList 
        data={[{name: 1}, {name: 2}, {name:3}]}
        renderItem={() => 
        <>
          <Spacer position='bottom'>
            <RestaurantInfoCard />
          </Spacer>
        </>
        }
        keyExtractor={(item) => {item.name}}
        contentContainerStyle={{padding: 8 }}
      />
    </SafeArea>
  );
};
