import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';


export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Transaction"){
        return(
          <View>
            <Text>BOOK SCREEN</Text>
          </View>
        )

      }
      else if(routeName === "Search"){
        return(
          <View>
            <Text>SEARCH SCREEN</Text>
          </View>
        )

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  TabNavigator: TabNavigator
  })
  
const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
