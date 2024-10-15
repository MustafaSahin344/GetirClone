import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab =createBottomTabNavigator()

function RootNavigator() {
  const CustomTabBarButton = ({children} )=> {
    return (
    <GestureHandlerRootView 
    style={{
      width:58,
      height:58,
      backgroundColor:"#5C3EBC",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:33,
      marginTop:-10,
      borderWidth:3,
      borderColor:"white",
      }}>
      <Entypo name="list" size={32} color="#FFD00C" />

    </GestureHandlerRootView>
    )
  }
  return (
  <Tab.Navigator
  initialRouteName="AnaSayfa"
  screenOptions={{
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#5C3EBC",
    tabBarInactiveTintColor: "#959595",
    headerShown: false,
    tabBarStyle: {
      height: 80,
    },
  }}
  
  >
    <Tab.Screen
    name="Ana Sayfa"
    component={HomeNavigator}
    options={{
      tabBarIcon: ({color}) => (
        <Entypo name="home" size={24} color={color}/>
      )
        }}
    
    
    />
     <Tab.Screen
    name="Search"
    component={HomeNavigator}
    options={{
      tabBarIcon: ({color}) => (
        <FontAwesome name="search" size={24} color={color}/>
      )
        }}
    />
    <Tab.Screen 
    name="list"
    component={HomeNavigator}
    options={{
      tabBarButton:(props) => <CustomTabBarButton {...props} />
    }}
    />



     <Tab.Screen
    name="User"
    component={HomeNavigator}
    options={{
      tabBarIcon: ({color}) => (
        <FontAwesome name="user" size={24} color={color}/>
      )
        }}
    
    
    />
     <Tab.Screen
    name="Gift"
    component={HomeNavigator}
    options={{
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="gift" size={24} color={color}/>
      )
        }}
    
    
    />
 

   
  </Tab.Navigator>
  )
}

export default RootNavigator