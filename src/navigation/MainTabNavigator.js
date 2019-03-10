import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ChatScreen from '../screens/ChatScreen'
import JoinScreen from '../screens/JoinScreen'

import Chat from '../screens/Views/Chat'

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
                    ? 'ios-heart-empty'
                    : 'md-heart-empty'
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

const JoinStack = createStackNavigator({
    Settings: JoinScreen,
})

JoinStack.navigationOptions = {
    tabBarLabel: 'Participa',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'}
        />
    ),
}

const CouponStack = createStackNavigator({
    Settings: ChatScreen,
})

CouponStack.navigationOptions = {
    tabBarLabel: 'Cupones',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}
        />
    ),
}

const bottomTabNavigator = createBottomTabNavigator({
    HomeStack,
    ChatStack,
    SearchStack,
    JoinStack,
    ProfileStack,
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
    }
})

export default createStackNavigator({
    Main: {
        screen: bottomTabNavigator,
    },
    ChatView: {
        screen: Chat,
    },
},
{
    headerMode: 'node',
})
