import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Input, Text, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../../../styles/MainStyle"

export default function CadastroScreen({navigation}) {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [password, setPassword] = useState(null);
    const bg = require("../../Assets/wallpaper.png");

    const cadastro = () => {
        setTimeout(() => {
            console.log("Entrou");
            console.log(nome);        
            console.log(email);
            console.log(telefone);
            console.log(password);            
        }, 3000);
        }

    return (
        <>
            <ImageBackground style={Styles.backStyle} source={bg} resizeMethod="resize">
                <View style={[Styles.container, LocalStyle.topStyle]}>
                    <Text style={Styles.titleLogin} h3>Cadastro</Text>
                    <Input
                        leftIcon={
                            <Icon
                                name='account'
                                size={24}
                                color='#fff'
                                style={{ paddingRight: 10 }}
                            />
                        }
                        placeholder='Nome completo'
                        keyboardType='default'
                        onChangeText={value => setNome(value)}
                        inputStyle={LocalStyle.InputStyle}
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='#fff'
                                style={{ paddingRight: 10 }}
                            />}
                        placeholder='E-mail'
                        keyboardType='email-address'
                        onChangeText={value => setEmail(value)}
                        inputStyle={LocalStyle.InputStyle}
                    />
                    <Input
                        // leftIcon={{ type: 'materialcommunityicons ', name: 'cellphone', color: "#ccc" }}
                        leftIcon={
                            <Icon
                                name='cellphone'
                                size={24}
                                color='#fff'
                                style={{ paddingRight: 10 }}
                            />
                        }
                        placeholder='Telefone'
                        keyboardType='phone-pad'
                        onChangeText={value => setTelefone(value)}
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
                        onPress={() => cadastro()}
                    >{'\t'}
                        Cadastrar
                    </Button>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={LocalStyle.link} >
                        <Text style={LocalStyle.textStyleLink}>Clique aqui para voltar.</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
}

const LocalStyle = StyleSheet.create({
    InputStyle: {
        color: "#fff",
    },
    topStyle:{
        top:80,
    },
    link: {
        marginTop: 15,
        width: "100%",
        color: "#fff",
    },
    textStyleLink: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
    }
});
