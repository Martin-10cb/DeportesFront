import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'; // Cambia aquí la importación
import {MyButton} from '../../components/MyButton';
import {RootStackParams} from '../../navigation/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, ButtonGroup} from '@ui-kitten/components';

interface Props extends StackScreenProps<RootStackParams, 'WelcomeScreen'> {}

export const WelcomeScreen = ({navigation}: Props) => {
  const handleLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegisterScreen = () => {
    navigation.navigate('RegisterUserScreen');
  };

  return (
    <View style={styles.background}>
      <Image
        source={require('../../img/logo_2.png')} // Usa 'source' en lugar de 'src'
        style={styles.image}
        alt="Logo" // 'alt' no es necesario en React Native
      />
      <View style={styles.buttons}>
        <MyButton placeholder="Iniciar Sesion" onPress={handleLoginScreen} />
        <MyButton placeholder="Registrarse" onPress={handleRegisterScreen} />
      </View>
    </View>
  );
};

// Crea y exporta un conjunto de estilos globales llamado globalStyles
const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    marginTop: '20%',
    display: 'flex',
  },
  buttons: {
    marginTop: '10%',
  },
  image: {
    width: '100%', // Se ajusta al 100% del contenedor
    height: 200, // Puedes ajustar este valor según necesites
    marginBottom: 20,
  },
});
