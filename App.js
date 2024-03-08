import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Animated } from 'react-native';
import React, { useState } from 'react';
import Loginsenha from './LoginSenha'; // Importando o componente Loginsenha
import Loginemail from './Loginemail';
import LoginemailTop from './LoginemailTop';
import LoginSenhaTop from './LoginSenhaTop';


export default function App() {
  const [altura] = useState(new Animated.Value(1500));
  const [animacaoIniciada, setAnimacaoIniciada] = useState(false);

  const handlePress = () => {
    if (!animacaoIniciada) {
      Animated.timing(
        altura,
        {
          toValue: 2550,
          duration: 2000,
        }
      ).start();
      setAnimacaoIniciada(true);
    } else {
      Animated.timing(
        altura,
        {
          toValue: 1550,
          duration: 2000,
        }
      ).start();
      setAnimacaoIniciada(false);
    }
  };

  return (
    <View style={styles.container}>
      <LoginemailTop/>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View
          style={{
            position: 'relative',
            width: 900,
            height: altura,
            borderRadius: 900,
            bottom: -1080,
            alignItems: 'center',
            justifyContent: 'flex-start', // Alinhamento no topo
            backgroundColor: '#222'
          }}>
          <Text style={styles.title}>Cadastrar</Text>
          <Loginemail/>
          <Loginsenha/>
          <Loginsenha/>

        </Animated.View>
        
      </TouchableOpacity>
      
      <Text style={styles.titleLogin}>Login</Text>
   
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545496',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLogin: {
    color: '#fff',
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -600,
    marginBottom: 600,

  },
  title: {
    position: 'absolute',
    top: 20,
    color: '#fff',
    fontSize: 40,
        fontWeight: 'bold'
  },
  inputEmail: {
    width: '70%',
    height: 45,
    borderColor: '#fff',
    borderRadius: 8,
    marginBottom: 35,
    paddingHorizontal: 10,
    color: '#333',
    opacity: 0.7,
  },
  inputSenha: {
    width: '70%',
    height: 45,
    borderColor: '#fff',
    borderRadius: 8,
    marginBottom: 35,
    paddingHorizontal: 10,
    color: '#333',
    opacity: 0.7,
  },
});
