import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import {
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import {Button, Input, Text} from 'react-native-elements';
import {auth} from "../firebase";


const {width, height} = Dimensions.get('window');
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            navigation.replace('Home');
        }).catch((err) => {
            alert(err);
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home');
            }
        })
        return unsubscribe;
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <SafeAreaView style={styles.inputView}>
                    <StatusBar style="light"/>
                    <Text h3 style={{marginBottom: 30}}>Welcome</Text>
                    <Input
                        placeholder="Email Address"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button title="Login" containerStyle={styles.inputButton} activeOpacity={0.8}
                            onPress={handleLogin}/>
                    <Button title="Register" type="outline" containerStyle={styles.inputButton} activeOpacity={0.6}
                            onPress={() => (navigation.navigate('Register'))}/>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView: {
        width: width - 80,
        alignItems: 'center'
    },
    inputButton: {
        width: width - 160,
        marginTop: 20,
    },
})
