import React, {Component} from 'react'
import {Container, Tab, Tabs, TabHeading, Icon, Text} from 'native-base'

export default class RaffleScreen extends Component {
    static navigationOptions = {
        title: 'Participa',
    }

    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={
                        <TabHeading>
                            <Icon name="calendar"/>
                            <Text>Sorteos</Text>
                        </TabHeading>
                    }>
                        <Text>Tab 1</Text>
                    </Tab>
                    <Tab heading={
                        <TabHeading>
                            <Icon name="ios-basket"/>
                            <Text>Cupones</Text>
                        </TabHeading>
                    }>
                        <Text>Tab 2</Text>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
