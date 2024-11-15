import React, { useContext } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'; // Cambia aquí la importación
import {MyButton} from '../../components/MyButton';
import {RootStackParams} from '../../navigation/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, ButtonGroup} from '@ui-kitten/components';
import { ThemeButton } from '../../components/ThemeButton';
import { ThemeContext } from '../../../MainApp';

interface Props extends StackScreenProps<RootStackParams, 'WelcomeScreen'> {}

const lightLogo = require('../../img/full-logo-black.png');
const darkLogo = require('../../img/full-logo-white.png');
const configIcon = require('../../img/config-icon.png');

export const WelcomeScreen = ({navigation}: Props) => {
  const { theme } = useContext(ThemeContext);

  const handleLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegisterScreen = () => {
    navigation.navigate('RegisterUserScreen');
  };

  return (
    <View style={styles.background}>
      <Image
        source={ theme == 'dark' ? darkLogo : lightLogo } // Usa 'source' en lugar de 'src'
        style={styles.image}
        alt="Logo" // 'alt' no es necesario en React Native
      />
      <View style={styles.buttons}>
        <MyButton placeholder="Iniciar Sesion" onPress={handleLoginScreen} />
        <MyButton placeholder="Registrarse" onPress={handleRegisterScreen} />
      </View>

      <ThemeButton style={styles.themeButtonContainer} />

      <View style={styles.configIconContainer} onTouchEnd={() => navigation.navigate('MenuScreen')}>
        <Image style={styles.configIcon} source={configIcon}/>
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
    height: '100%'
  },
  buttons: {
    marginTop: '10%',
  },
  image: {
    width: '100%', // Se ajusta al 100% del contenedor
    height: 200, // Puedes ajustar este valor según necesites
    marginBottom: 20,
  },
  themeButtonContainer: {
    position: 'absolute',
    left: 20,
    bottom: 100
  },
  configIconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    height: 40,
    width: 40
  },
  configIcon: {
    width: '100%',
    height: '100%'
  }
});
