import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {
  useWindowDimensions,
  Alert,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useState, useContext} from 'react';
import {MyIcon} from '../../components/MyIcon';
import {MyButton} from '../../components/MyButton';
import { APIContext, ThemeContext } from '../../../MainApp';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

const lightLogo = require('../../img/full-logo-black.png');
const darkLogo = require('../../img/full-logo-white.png');
const lightUser = require('../../img/user-black.png');
const darkUser = require('../../img/user-white.png');

export const LoginScreen = ({navigation}: Props) => {
  const { theme } = useContext(ThemeContext);
  const { apiUrl } = useContext(APIContext);
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email:${email}\nPassword: ${password}`);

    if (!email || !password) {
      return;
    }

    const body = new FormData();
    body.append('email', email);
    body.append('password', password);

    fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: body,
    })
      .then(async res => {
        const json = (await res.json()) as {detail: string};

        if (!res.ok) {
          Alert.alert('No ha sido posible iniciar sesión', json.detail);
          return;
        }

        navigation.navigate('LeagueListScreen');
      })
      .catch(error => Alert.alert('Ha ocurrido un error', error.message));
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#879EF4',
      width: '100%',
      height: 'auto',
      borderRadius: 15,
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '50%',
      marginTop: 20,
      resizeMode: 'contain',
    },
    imageLogo: {
      width: '30%',
      height: '100%',
      resizeMode: 'contain',
    },
    imageContenedor: {
      width: '100%',
      height: '10%',
    },
    input: {
      marginBottom: 20,
      backgroundColor: 'transparent',
      borderColor: theme == 'dark' ? 'white' : 'black',
    }
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.imageContenedor} onTouchEnd={()=>navigation.navigate('WelcomeScreen')}>
        <Image
          source={theme == 'dark' ? darkLogo : lightLogo}
          style={styles.imageLogo}
          alt="Logo"
        />
      </View>
      <ScrollView style={{marginHorizontal: 40}}>
        <View>
          <Text category="h1" style={{textAlign: 'center'}}>
            Iniciar sesion
          </Text>
          <Image
            source={theme == 'dark' ? darkUser : lightUser}
            style={styles.image}
            alt="Perfil"
          />
        </View>
        <View>
          <Input
            placeholder="Correo"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="email-outline" />}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={() => <MyIcon name="lock-outline" />}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={{marginTop: 20}} />

        {/*Boton de inicio de sesion */}
        <View>
          <MyButton
            placeholder="Iniciar Sesion"
            onPress={handleLogin}></MyButton>
        </View>
      </ScrollView>
    </View>
  );
};
