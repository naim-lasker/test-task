import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons'
import SingleProduct from '../singleItems/SingleProduct';
import Block from '../components/Block';

const SingleProductContainer = (props) => {
    return (
        <Block borderRadius margin={[10, 0, 10, 0]} padding={[5, 0, 0, 0]} style={[styles.mainCOntainer]}>
            <Block row spaceBetween borderRadius margin={[0, 8, 0, 8]} padding={[6, 6, 6, 6]} style={[styles.topPart]}>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Technologies Pvt. Ltd</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.topRight}>
                    <TouchableOpacity style={[styles.btn, { marginRight: 7 }]}>
                        <Text>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Call</Text>
                    </TouchableOpacity>
                </View>
            </Block>

            <Block row margin={[10, 8, 10, 8]}>
                <Text style={styles.catPara}>14 catalogues</Text>
                <Text>3 products</Text>
            </Block>

            <Block row wrap margin={[0, 8, 0, 8]}>
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </Block>

            <Block borderRadius margin={[10, 0, 0, 0]} padding={[10, 10, 10, 10]} style={styles.btmPart}>
                <TouchableOpacity style={[styles.btn, { maxWidth: 160 }]}>
                    <Block row center>
                        <Octicons name="star" size={25} color="#000000" />
                        <Text style={{
                            marginLeft: 8
                        }}>Star this lead</Text>
                    </Block>
                </TouchableOpacity>
            </Block>
        </Block>
    );
}


const styles = StyleSheet.create({
    mainCOntainer: {
        borderWidth: 1,
        borderColor: '#999',
    },
    topPart: {
        backgroundColor: '#ddd',
    },
    topRight: {
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: '#C4C4C4',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6
    },
    catPara: {
        marginRight: 40
    },
    btmPart: {
        backgroundColor: '#D8D8D8',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
});

export default SingleProductContainer;