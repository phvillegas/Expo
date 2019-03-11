import React, {Component} from 'react'
import {Platform} from 'react-native'
import {Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon, Text} from 'native-base'

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Mensajes',
        headerStyle: {
            ...Platform.select({
                android: {
                    borderBottomWidth: 1,
                    borderColor: '#cdcdcd',
                    elevation: 0,
                },
            }),
        },
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem
                            avatar
                            onPress={() =>
                                this.props.navigation.navigate('ChatView', {
                                    name: 'Guasca FM 88.9'
                                })
                            }
                        >
                            <Left>
                                <Thumbnail source={require('../assets/images/cat.jpeg')} />
                            </Left>
                            <Body style={{height: 70}}>
                                <Text>Guasca FM 88.9</Text>
                                <Text note numberOfLines={2}>
                                    Lorem ipsum dolor sit amet
                                </Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                                <Icon name="ios-arrow-forward"/>
                            </Right>
                        </ListItem>

                        <ListItem
                            avatar
                            onPress={() =>
                                this.props.navigation.navigate('ChatView', {
                                    name: 'Almacenes éxito'
                                })
                            }
                        >
                            <Left>
                                <Thumbnail source={require('../assets/images/cat.jpeg')} />
                            </Left>
                            <Body style={{height: 70}}>
                                <Text>Almacenes éxito</Text>
                                <Text note numberOfLines={2}>
                                    Lorem ipsum dolor sit amet
                                </Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                                <Icon name="ios-arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
