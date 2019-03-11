import React, {Component} from 'react'
import {Text, StyleSheet, Image, View, Dimensions, Platform} from 'react-native'
import {Icon, Container, Content, Button} from 'native-base'
import CardComponent from '../components/CardComponent'

const images = [
    require('../assets/images/profile.jpeg'),
    require('../assets/images/cat.jpeg'),
    require('../assets/images/icon.png'),
    require('../assets/images/robot-dev.png'),
    require('../assets/images/cat.jpeg'),
    require('../assets/images/robot-prod.png'),
]

const {width, height} = Dimensions.get('window')

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'don_gatito',
        headerLeft: <Icon name="ios-timer" style={{paddingLeft: 10}} />,
        headerRight: <Icon name="ios-menu" style={{paddingRight: 10}} />,
        headerStyle: {
            ...Platform.select({
                android: {
                    borderBottomWidth: 1,
                    borderColor: '#cdcdcd',
                    elevation: 0,
                },
            })
        },
    }

    state = {
        activeIndex: 0,
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{paddingTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image
                                    source={require('../assets/images/profile.jpeg')}
                                    style={styles.imageProfile}
                                />
                            </View>
                            <View style={{flex: 3}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>93</Text>
                                        <Text style={{fontSize: 13, color: 'grey'}}>posts</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>83</Text>
                                        <Text style={{fontSize: 13, color: 'grey'}}>seguidores</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>67</Text>
                                        <Text style={{fontSize: 13, color: 'grey'}}>seguidos</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 10}}>
                                    <Button bordered dark
                                        style={styles.editProfileButton}>
                                        <Text>Edit Profile</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                            <Text style={{fontWeight: 'bold'}}>Don Gatito</Text>
                            <Text>Super Cat | Gatito model | Programing Cat</Text>
                            <Text style={{color: '#3880ff'}}>dongatito.com</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.buttonTopGrid}>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(0)}
                                active={this.state.activeIndex === 0}
                            >
                                <Icon fontSize={50} name="md-grid" style={[this.state.activeIndex === 0 ? {} : {color: 'grey'}]} />
                            </Button>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(1)}
                                active={this.state.activeIndex === 1}
                            >
                                <Icon name="ios-list" style={[this.state.activeIndex === 1 ? {} : {color: 'grey'}]} />
                            </Button>
                            <Button
                                transparent
                                onPress={() => this.segmentClicked(2)}
                                active={this.state.activeIndex === 2}
                            >
                                <Icon name="ios-contacts" style={[this.state.activeIndex === 2 ? {} : {color: 'grey'}]} />
                            </Button>
                        </View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        )
    }

    segmentClicked(index) {
        this.setState({activeIndex: index})
    }

    renderSectionOne() {
        return images.map((image, index) => {
            return(
                <View key={index}
                      style={[
                          {width: (width) /3},
                          {height: (width) / 3},
                          {marginBottom: 2},
                          index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}
                      ]}
                >
                    <Image
                        style={{flex: 1, width: undefined, height: undefined}}
                        source={image}
                    />
                </View>
            )
        })
    }

    renderSection() {
        if (this.state.activeIndex === 0) {
            return (
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        } else if (this.state.activeIndex === 1) {
            return (
                <View>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Hi 3!</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'red',
        borderWidth: 3,
    },
    editProfileButton: {
        flex: 3,
        marginLeft: 10,
        justifyContent: 'center',
        height: 30,
        marginRight: 10,
        borderColor: 'grey',
    },
    buttonTopGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: '#eae5e5',
    },
})
