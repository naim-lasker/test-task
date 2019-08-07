import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

class Tab extends Component {
    render() {
        return (
            <View style={[styles.tabContainer, this.props.containerStyles]}>
                {this.props.tabItem == 2 ? (
                    <View style={[styles.tabWrap]}>
                        <TouchableOpacity
                            onPress={this.props.onPress_1}
                            style={[styles.tabItem, this.props.itemStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                            {this.props.tabValue_1 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_1}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_1 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_1}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress_2}
                            style={[styles.tabItem, this.props.itemStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                            {this.props.tabValue_2 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_2}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_2 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_2}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                    </View>
                ) : (
                        null
                    )}

                {this.props.tabItem == 3 ? (
                    <View style={[styles.tabWrap]}>
                        <TouchableOpacity
                            onPress={this.props.onPress_1}
                            style={[styles.tabItem, this.props.itemStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                            {this.props.tabValue_1 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_1}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_1 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_1}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress_2}
                            style={[styles.tabItem, this.props.itemStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                            {this.props.tabValue_2 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_2}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_2 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_2}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress_3}
                            style={[styles.tabItem, this.props.itemStyles, this.props.filterState_3 ? styles.tabItemActive : null]}>
                            {this.props.tabValue_3 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_3 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_3}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_3 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_3 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_3}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                    </View>
                ) : (
                        null
                    )}

                {this.props.tabItem == 4 ? (
                    <View style={[styles.tabWrap]}>
                        <TouchableOpacity
                            onPress={this.props.onPress_1}
                            style={[styles.tabItem, this.props.itemStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                            {this.props.tabValue_1 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_1}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_1 ? (
                                <View>
                                    <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_1 ? styles.tabItemActive : null]}>
                                        {this.props.tabTitle_1}
                                    </Text>
                                </View>
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress_2}
                            style={[styles.tabItem, { flexDirection: 'row' }, this.props.itemStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                            <View style={styles.triangleShapeView}></View>
                            {this.props.tabValue_2 ? (
                                <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                                    {this.props.tabValue_2}
                                </Text>
                            ) : (null)}
                            {this.props.tabTitle_2 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_2 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_2}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress_3}
                            style={[styles.tabItem, { flexDirection: 'row' }, this.props.itemStyles, this.props.filterState_3 ? styles.tabItemActive : null]}>
                            <View style={[styles.triangleShapeView, {borderLeftColor: '#ddd',}]}></View>
                            {this.props.tabValue_3 ? (
                                <View>
                                    <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_3 ? styles.tabItemActive : null]}>
                                        {this.props.tabValue_3}
                                    </Text>
                                </View>
                            ) : (null)}
                            {this.props.tabTitle_3 ? (
                                <Text style={[styles.tabTitle, this.props.titleStyles, this.props.filterState_3 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_3}
                                </Text>
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress_4}
                            style={[styles.tabItem, { flexDirection: 'row' }, this.props.itemStyles, this.props.filterState_4 ? styles.tabItemActive : null]}>
                            <View style={[styles.triangleShapeView, {borderLeftColor: '#ddd',}]}></View>
                            {this.props.tabValue_4 ? (
                                <View>
                                    <Text style={[styles.tabValue, this.props.valueStyles, this.props.filterState_4 ? styles.tabItemActive : null]}>
                                        {this.props.tabValue_4}
                                    </Text>
                                </View>
                            ) : (null)}
                            {this.props.tabTitle_4 ? (
                                <View style={[styles.tabTitle, { display: 'flex' }, this.props.titleStyles, this.props.filterState_4 ? styles.tabItemActive : null]}>
                                    {this.props.tabTitle_4}
                                </View>
                            ) : (null)}
                        </TouchableOpacity>
                    </View>
                ) : (
                        null
                    )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {},
    tabWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        overflow: 'hidden',
        flex: 1,
        elevation: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 30,
        // paddingVertical: 12,
        // paddingHorizontal: 5,
        // borderRightWidth: 1,
        // borderRightColor: '#000',

    },
    tabValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },
    tabTitle: {
        fontSize: 10,
        color: '#000',
        fontWeight: '600'
    },
    tabItemActive: {
        color: '#fff',
        backgroundColor: '#000'
    },
    triangleShapeView: {
        width: 0,
        height: 0,
        borderTopWidth: 15,
        borderBottomWidth: 15,
        borderLeftWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#000',
        paddingHorizontal: 3
    },
});

export default Tab;