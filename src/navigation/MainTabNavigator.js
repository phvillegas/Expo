import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ChatScreen from '../screens/ChatScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
})

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-home'
                    : 'md-home'
            }
        />
    ),
}

const SearchStack = createStackNavigator({
    Search: SearchScreen,
})

SearchStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-search'
                    : 'md-search'
            }
        />
    ),
}

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
})

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-contact'
                    : 'md-contact'
            }
        />
    ),
}

const ChatStack = createStackNavigator({
    Chat: ChatScreen,
})

ChatStack.navigationOptions = {
    tabBarLabel: 'Chats',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-chatbubbles'
                    : 'md-chatbubbles'
            }
        />
    ),
}

export default createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ChatStack,
    ProfileStack,
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
    }
})
