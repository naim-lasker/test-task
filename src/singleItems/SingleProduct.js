import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SingleProduct = (props) => {
    return (
        <View style={styles.box}>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 30,
        width: 30,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor:'#999',
        borderRadius: 6,
        marginRight: 5,
        marginBottom: 5
    },
});

export default SingleProduct;