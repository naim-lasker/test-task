import React, { Component } from 'react';
import { View, Text, ScrollView, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import Tab from '../../components/Tab';
import Block from '../../components/Block';
import SingleProductContainer from '../../singleItems/SingleProductContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

class ProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabHeaderType: 1,
            date: ''
        };
    }

    changeType(tabHeaderType) {
        this.setState({
            tabHeaderType: tabHeaderType
        })
    }

    render() {

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block margin={[20, 20, 20, 20]}>
                    <Block row spaceBetween center>
                        <View row style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontSize: 30,
                                color: '#000',
                                marginRight: 30
                            }}>Filter</Text>
                            <View style={{
                                backgroundColor: '#fff',
                                fontSize: 20,
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: '#bdc3c7',
                                overflow: 'hidden'
                            }}>
                                <Picker
                                    style={{
                                        height: 40,
                                        width: 130,
                                    }}
                                    textStyle={{ fontSize: 12 }}
                                    selectedValue={this.state.date}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ language: itemValue })
                                    }>
                                    <Picker.Item label="27th July" value="27thuly" />
                                    <Picker.Item label="28th July" value="287thJuly" />
                                </Picker>
                            </View>
                        </View>
                        <View>
                            <Feather name="loader" size={30} color="green" />
                        </View>
                    </Block>
                </Block>
                <View style={{
                    marginTop: 5,
                    marginHorizontal: 12
                }}>
                    <Tab
                        tabItem={4}
                        tabTitle_1="Raw Leads (250)"
                        tabTitle_2="Starred(43) (25%)"
                        tabTitle_3="Segmented (43)"
                        tabTitle_4={
                            <Block row center>
                                <MaterialCommunityIcons name="fire" size={20} color="red" />
                                <Text style={{
                                    marginLeft: 5,
                                    fontSize: 10
                                }}>hot (43)</Text>
                            </Block>
                        }
                        filterState_1={this.state.tabHeaderType === 1}
                        filterState_2={this.state.tabHeaderType === 2}
                        filterState_3={this.state.tabHeaderType === 3}
                        filterState_3={this.state.tabHeaderType === 4}
                        onPress_1={() => { this.changeType(1) }}
                        onPress_2={() => { this.changeType(2) }}
                        onPress_3={() => { this.changeType(3) }}
                        onPress_3={() => { this.changeType(4) }}
                    />
                    {this.state.tabHeaderType === 1 ? (
                        <View>
                            <SingleProductContainer />
                            <SingleProductContainer />
                            <SingleProductContainer />
                        </View>
                    ) : (
                            null
                        )
                    }

                    {this.state.tabHeaderType === 2 ? (
                        <View>
                            <Text>Hello 2</Text>
                        </View>
                    ) : (
                            null
                        )
                    }

                    {this.state.tabHeaderType === 3 ? (
                        <View>
                            <Text>Hello 3</Text>
                        </View>
                    ) : (
                            null
                        )
                    }

                    {this.state.tabHeaderType === 4 ? (
                        <View>
                            <Text>Hello 4</Text>
                        </View>
                    ) : (
                            null
                        )
                    }
                </View>
            </ScrollView>
        )
    }
}



export default ProductScreen;