import React, {useEffect, useLayoutEffect} from "react";
import {StyleSheet, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {auth, db} from '../firebase';

let isAdmin;
const SubjectScreen = ({navigation, route}) => {
    useEffect(() => {
        db.collection('userRoles').doc(auth.currentUser.uid).onSnapshot((doc) => {
            isAdmin = doc.get('isAdmin');
        })
    }, [navigation]);

    useLayoutEffect(
        () => {
            navigation.setOptions(
                {
                    title: route.params.title,
                    headerRight: () => (
                        isAdmin ? <Ionicons style={{paddingRight: 10}} onPress={() => console.log("Clicked")}
                                            name="md-create-outline" size={24} color="white"/> : null
                    ),
                }
            )
        }, [navigation],
    );
    return (

        <View style={styles.container}>

        </View>
    )
}

export default SubjectScreen;

const styles = StyleSheet.create({
    container: {}
})
