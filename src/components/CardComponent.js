import React, {Component} from 'react'
import {Dimensions, Platform} from 'react-native'
import {Card, CardItem, Left, Right, Thumbnail, Button, Icon, Body, Text} from 'native-base'
import Image from 'react-native-scalable-image'

class CardComponent extends Component {
    render() {
        return (
            <Card transparent style={{borderColor: '#cdcdcd', borderTopWidth: 1, marginLeft: 0, marginRight: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail small source={require('../assets/images/profile.jpeg')}/>
                        <Body>
                            <Text>Don Gatito</Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Icon name="ios-more" style={{color: '#000'}} />
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={require('../assets/images/cat3.jpg')}
                        width={Dimensions.get('window').width}
                    />
                </CardItem>
                <CardItem style={{height: 40}}>
                    <Left>
                        <Button transparent>
                            <Icon
                                name="ios-heart-empty"
                                style={{color: 'grey', fontSize: 30}}
                            />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color: 'grey', fontSize: 30}}/>
                        </Button>
                        <Button transparent>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'}
                                style={{color: '#777', fontSize: 30}}
                            />
                        </Button>
                    </Left>
                    <Right>
                        <Text>101 likes</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight: '900'}}>michu_cat </Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam atque commodi corporis cum deserunt dolore dolores,
                            eius ipsum iste minus necessitatibus neque nisi pariatur
                            praesentium quidem sapiente sunt vel vero.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default CardComponent
