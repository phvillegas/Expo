import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {Container, Tab, Tabs, Text} from 'native-base'
import RaffleComponent from '../components/RaffleComponent'

export default class JoinScreen extends Component {
    static navigationOptions = {
        title: 'Participa',
    }

    render() {
        return (
            <Container>
                <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor: '#000', height: 1}}>
                    <Tab heading="Sorteos" activeTextStyle={{color: '#000'}}>
                        <ScrollView style={{backgroundColor: '#f5f5f5'}}>
                            <RaffleComponent
                                title="Inscribite y gana una moto boxer"
                                expires="15 de Junio del 2019"
                                active={false}
                            />
                            <RaffleComponent
                                title="Serenata con el 'mariachi mi Colombia'"
                                expires="20 de Junio del 2019"
                                active={true}
                            />
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
