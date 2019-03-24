import React, {Component} from 'react'
import {ActivityIndicator, View, KeyboardAvoidingView, Platform} from 'react-native'
import {GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat'
import {Container, Left, Right, Button, Icon, Text, Thumbnail, Header, Body, CardItem} from 'native-base'

class Chat extends Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        //https://stackoverflow.com/a/54550286/1458375
        if (!this.state.messages.length) {
            this.setState({
                messages: [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: '0 message',
                        createdAt: new Date(),
                        system: true,
                    }
                ]
            })
        }
        this.setState({
            messages: [
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: '#aweme',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Developer',
                    },
                    sent: true,
                    received: true,
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: 'Mensaje',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: require('../../assets/images/cat.jpeg'),
                    },
                    image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',
                    sent: true,
                    received: true,
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: "You are officially rocking GiftedChat.",
                    createdAt: new Date(),
                    system: true,
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: 'Send me a picture!',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Developer',
                    },
                    sent: true,
                    received: true,
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: 'sjkjsdkds',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                    sent: true,
                    received: true,
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: 'Where are you?',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Developer',
                    },
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: 'Yes, and I use Gifted Chat!',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                    sent: true,
                    received: true
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: 'Are you building a chat app?',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Developer',
                    },
                },
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: "You are officially rocking GiftedChat.",
                    createdAt: new Date(),
                    system: true,
                },
            ]
        })
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'ios-arrow-back'} style={{color: '#000'}} />
                        </Button>
                    </Left>

                    <Body>
                        <Text style={{color: '#000'}}>
                            {this.props.navigation.getParam('name')}
                        </Text>
                    </Body>

                    <Right>
                        <Button transparent onPress={() => alert('Foto')}>
                            <Thumbnail
                                small
                                source={require('../../assets/images/cat.jpeg')}
                            />
                        </Button>
                    </Right>
                </Header>

                <GiftedChat
                    renderInputToolbar={this.renderInputToolbar}
                    renderLoading={() =>  <ActivityIndicator size="large" color="#0000ff" />}
                    messages={this.state.messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                        _id: 1,
                        name: 'Pedro Hernández Villegas',
                        avatar: require('../../assets/images/cat.jpeg'),
                    }}
                    parsePatterns={linkStyle => [
                        {
                            pattern: /#(\w+)/,
                            style: { ...linkStyle, color: 'lightgreen' },
                            onPress: props => alert(`press on ${props}`),
                        },
                    ]}
                    isAnimated
                    placeholder="Escribe tu mensaje..."
                    renderSend={this.renderSend}
                />

                {
                    Platform.OS === 'android' ? <KeyboardAvoidingView behavior={'padding'} /> : <View />
                }
            </Container>
        )
    }

    renderInputToolbar(props) {
        return (
            <InputToolbar
                {...props}
                renderActions={
                    () => {
                        return (
                            <Button onPress={() => alert('audio')} transparent style={{alignSelf: 'center'}}>
                                <Icon name='ios-mic' style={{fontSize: 30}} />
                            </Button>
                        )
                    }
                }
                onPressActionButton={() => alert('tab')}
            />
        )
    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View style={{
                    marginRight: 10,
                    marginBottom: 5,
                }}>
                    <Icon name="md-send" style={{
                        color: '#3880ff',
                        alignSelf: 'center',
                        verticalAlign: 'center',
                        alignItems: 'center'
                    }}/>
                </View>
            </Send>
        )
    }
}

export default Chat
