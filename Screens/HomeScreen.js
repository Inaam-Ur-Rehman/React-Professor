import React from "react";
import {StyleSheet, View} from "react-native";
import LectureCard from "../Components/LectureCard";
import {StatusBar} from "expo-status-bar";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.cardsContainer}>
                <LectureCard title="Physics" url="https://bit.ly/3u38icz" navigation={navigation}/>
                <LectureCard title="Chemistry" url="https://bit.ly/33X96oF" navigation={navigation}/>
                <LectureCard title="Mathematics" url="https://bit.ly/341WegQ" navigation={navigation}/>
                <LectureCard title="Biology" url="https://bit.ly/3yrvqEP" navigation={navigation}/>
                <LectureCard title="Urdu" url="https://bit.ly/33V5ljp" navigation={navigation}/>
                <LectureCard title="English" url="https://bit.ly/33XbHir" navigation={navigation}/>
            </View>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    cardsContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    }
})
