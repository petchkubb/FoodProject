import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Body, ListItem as Item, Card, CardItem, Icon, Right, } from 'native-base'
export class HistoryList extends Component {
    render() {
        const { data, touch } = this.props
        return (
            <TouchableOpacity onPress={touch}>
                <Card>
                    <CardItem >
                        <Body style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <Text>{data.date} {data.time}</Text>
                            <Text>Receiver: {data.item.name}</Text>
                            <Text>{data.item.restaurantname}</Text>
                        </Body>
                        <Right style={{}}>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default HistoryList
