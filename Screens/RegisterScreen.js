import React, {useState} from 'react'
import {
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import {Button, Input, Text} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import {auth} from '../firebase'

const {width, height} = Dimensions.get('window');


const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
            authUser.user.updateProfile(
                {
                    displayName: name,
                }
            );
            navigation.replace('Home');
        }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <SafeAreaView style={styles.inputView}>
                    <StatusBar style="light"/>
                    <Text h3 style={{marginBottom: 30}}>Create an Account</Text>
                    <Input
                        placeholder="Full Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
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
                    <Input
                        placeholder="Confirm Password"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                    <Button title="Register" containerStyle={styles.inputButton} activeOpacity={0.8}
                            onPress={handleRegister}/>
                    <Button title="Login" type="outline" containerStyle={styles.inputButton} activeOpacity={0.6}
                            onPress={() => navigation.navigate('Login')}/>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default RegisterScreen

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
