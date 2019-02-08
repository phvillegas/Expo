import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {Container, Tab, Tabs, Text} from 'native-base'
import CardComponent from '../components/CardComponent'

export default class RaffleScreen extends Component {
    static navigationOptions = {
        title: 'Participa',
    }

    render() {
        return (
            <Container>
                <Tabs initialPage={0}>
                    <Tab heading="Sorteos" activeTextStyle={{color: '#000'}}>
                        <ScrollView>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Cupones" activeTextStyle={{color: '#000'}}>
                        <Text>Tab 2</Text>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
