import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Text} from 'react-native'
import {Icon, Container, Content, Thumbnail} from 'native-base'
import CardComponent from '../components/CardComponent'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Instagram',
        headerLeft: <Icon name="ios-camera" style={{paddingLeft: 10}} />,
        headerRight: <Icon name="ios-send" style={{paddingRight: 10}} />,
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{height: 100}}>
                        {/* <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7}}>
                            <Text>Stories</Text>
                            <Text>Watch all</Text>
                        </View> */}
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                }}
                            >
                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: 'grey', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        Your Story
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        gatito_malo_dsds
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        gatito_bueno
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        lupita
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        missy
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        cat_mr
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        gatii
                                    </Text>
                                </View>

                                <View style={{alignItems: 'center', width: 80}}>
                                    <Thumbnail
                                        style={{marginHorizontal: 5, borderColor: 'red', borderWidth: 2}}
                                        source={require('../assets/images/profile.jpeg')} />
                                    <Text
                                        numberOfLines={1}
                                        style={{fontSize: 13, color: '#000', paddingLeft: 2, paddingRight: 2, fontWeight: '100'}}
                                    >
                                        michu
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})