import React, {Component} from 'react'
import {Image} from 'react-native'
import {Body, Button, Card, CardItem, Left, Right, Text} from 'native-base'

class RaffleComponent extends Component {
    render() {
        return (
            <Card transparent>
                <CardItem>
                    <Body>
                        <Text style={{fontSize: 20}}>{this.props.title}</Text>
                        <Text note>Válido hasta: {this.props.expires}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/images/cat.jpeg')} style={{height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem style={{height: 40, backgroundColor: '#f3f3f3'}}>
                    <Left>
                        <Button small success={!this.props.active} disabled={this.props.active}>
                            <Text>{this.props.active ? 'Participando' : 'Participar'}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text>101 participantes</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{textAlign: 'justify'}}>
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

export default RaffleComponent
