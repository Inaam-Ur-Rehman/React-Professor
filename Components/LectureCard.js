import React from "react";
import {Image, Text} from "react-native-elements";
import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";

const {width, height} = Dimensions.get('window');

const LectureCard = ({title, url, navigation}) => {
    return (

        <View style={styles.card}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(
                'Subject',
                {title: title},
            )}>
                <Image source={{uri: url}} style={styles.image}/>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>

    )
}
export default LectureCard;

const styles = StyleSheet.create({
    card: {
        width: width / 2 - 30,
        backgroundColor: '#FBFBFB',
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
    },
    image: {
        width: width / 2 - 30,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})
