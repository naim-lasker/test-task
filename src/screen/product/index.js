import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Tab from '../../components/Tab';
import SingleProductItem from '../../singleItems/SingleProductItem';

class ProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabHeaderType: 1,
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
                <View style={{
                    marginTop: 5
                }}>
                    {/* <Text>Hello ...</Text> */}
                    <Tab
                        tabItem={4}
                        tabTitle_1="Raw Leads(250)"
                        tabTitle_2="Starred(43) (25%)"
                        tabTitle_3="Segmented (43)"
                        tabTitle_4="Hot (43)"
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
                            <View style={{
                                margin: 10,
                                borderWidth: 1,
                                borderColor: '#444',
                                padding: 5,
                                borderRadius: 6
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#ddd',
                                    paddingVertical: 6,
                                    paddingHorizontal: 6,
                                    borderRadius: 6
                                }}>
                                    <View>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text>Technologies Pvt. Ltd</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <TouchableOpacity style={[styles.btn, { marginRight: 7 }]}>
                                            <Text>WhatsApp</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text>Call</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginVertical: 10
                                }}>
                                    <Text style={{
                                        marginRight: 40
                                    }}>14 catalogues</Text>
                                    <Text>3 products</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: 6
                                }}>
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                </View>

                                <View style={{
                                    marginTop: 10,
                                    backgroundColor: '#999',
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 6
                                }}>
                                    <TouchableOpacity style={[styles.btn, { maxWidth: 160 }]}>
                                        <Text>Star this lead</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                margin: 10,
                                borderWidth: 1,
                                borderColor: '#444',
                                padding: 5,
                                borderRadius: 6
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#ddd',
                                    paddingVertical: 6,
                                    paddingHorizontal: 6,
                                    borderRadius: 6
                                }}>
                                    <View>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text>Technologies Pvt. Ltd</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <TouchableOpacity style={[styles.btn, { marginRight: 7 }]}>
                                            <Text>WhatsApp</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text>Call</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginVertical: 10
                                }}>
                                    <Text style={{
                                        marginRight: 40
                                    }}>14 catalogues</Text>
                                    <Text>3 products</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: 6
                                }}>
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                </View>

                                <View style={{
                                    marginTop: 10,
                                    backgroundColor: '#999',
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 6
                                }}>
                                    <TouchableOpacity style={[styles.btn, { maxWidth: 160 }]}>
                                        <Text>Star this lead</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                margin: 10,
                                borderWidth: 1,
                                borderColor: '#444',
                                padding: 5,
                                borderRadius: 6
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#ddd',
                                    paddingVertical: 6,
                                    paddingHorizontal: 6,
                                    borderRadius: 6
                                }}>
                                    <View>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text>Technologies Pvt. Ltd</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <TouchableOpacity style={[styles.btn, { marginRight: 7 }]}>
                                            <Text>WhatsApp</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn}>
                                            <Text>Call</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginVertical: 10
                                }}>
                                    <Text style={{
                                        marginRight: 40
                                    }}>14 catalogues</Text>
                                    <Text>3 products</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: 6
                                }}>
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                    <SingleProductItem />
                                </View>

                                <View style={{
                                    marginTop: 10,
                                    backgroundColor: '#999',
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 6
                                }}>
                                    <TouchableOpacity style={[styles.btn, { maxWidth: 160 }]}>
                                        <Text>Star this lead</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
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


const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#ccc',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 6
    }
});

export default ProductScreen;