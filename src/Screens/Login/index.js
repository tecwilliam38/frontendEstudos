import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Input, Text, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../../../styles/MainStyle"

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const bg = require("../../Assets/wallpaper.png");

    const entrar = () => {
        console.log("Entrou");
        console.log(email);
        console.log(password);
        navigation.navigate("Home")
    }
    function cadastrar() {
        setTimeout(() => {
            navigation.navigate("Cadastro")
        }, 5000);
    }

    return (
        <>
            <ImageBackground style={Styles.backStyle} source={bg} resizeMethod="resize">
                <View style={Styles.container}>
                    <Text style={Styles.titleLogin} h3>Logar</Text>
                    <Input
                        leftIcon={
                            <Icon
                                name='account'
                                size={24}
                                color='#fff'
                                style={{ paddingRight: 10 }}
                            />
                        }
                        placeholder='E-mail'
                        keyboardType='email-address'
                        onChangeText={value => setEmail(value)}
                        inputStyle={LocalStyle.InputStyle}
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name='account-key'
                                size={24}
                                color='#fff'
                                style={{ paddingRight: 10 }}
                            />
                        }
                        placeholder='Senha'
                        keyboardType='default'
                        secureTextEntry={true}
                        onChangeText={value => setPassword(value)}
                    />
                    <Button
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ["#FF9800", "#F44336"],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        buttonStyle={{
                            backgroundColor: 'rgba(90, 154, 230, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                            paddingHorizontal: 0
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        icon={{ name: "check", color: "white", size: 20, type: 'font-awesome', }}
                        onPress={() => entrar()}
                    >{'\t'}
                        Logar
                    </Button>
                    <TouchableOpacity onPress={() => cadastrar()} style={LocalStyle.link} >
                        <Text style={LocalStyle.textStyleLink}>Ainda não é cadastrado? Clique aqui.</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </>
    );
}

const LocalStyle = StyleSheet.create({
    InputStyle: {
        color: "#fff",
    },
    link: {
        marginTop: 20,
        width: "100%",
        color: "#fff",
    },
    textStyleLink: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
    }
});
