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
import {ThemeContext} from '../../../MainApp';
import {APIContext} from '../../../MainApp';

interface Props
  extends StackScreenProps<RootStackParams, 'RegisterUserScreen'> {}

const lightLogo = require('../../img/full-logo-black.png');
const darkLogo = require('../../img/full-logo-white.png');
const lightUser = require('../../img/user-black.png');
const darkUser = require('../../img/user-white.png');

export const RegisterUserScreen = ({navigation}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {apiUrl} = useContext(APIContext);
  const {height} = useWindowDimensions();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleRegisterUser = () => {
    console.log(
      `Usuario: ${nombreUsuario}\nEmail:${email}\nPassword: ${password}\nEdad: ${age}`,
    );

    if (!nombreUsuario || !email || !password || !age) {
      return;
    }

    const body = new FormData();
    body.append('username', nombreUsuario);
    body.append('email', email);
    body.append('password', password);
    body.append('age', age);

    fetch(`${apiUrl}/register`, {
      method: 'POST',
      body: body,
    })
      .then(async res => {
        const json = (await res.json()) as {detail: string};

        if (!res.ok) {
          Alert.alert('No ha sido posible registrar al usuario', json.detail);
          return;
        }

        Alert.alert('Éxito', 'Usuario registrado');
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
    },
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={styles.imageContenedor}
        onTouchEnd={() => navigation.navigate('WelcomeScreen')}>
        <Image
          source={theme == 'dark' ? darkLogo : lightLogo}
          style={styles.imageLogo}
          alt="Logo"
        />
      </View>
      <ScrollView style={{marginHorizontal: 40}}>
        <View>
          <Text category="h1" style={{textAlign: 'center'}}>
            Registro
          </Text>
          <Image
            source={theme == 'dark' ? darkUser : lightUser}
            style={styles.image}
            alt="Perfil"
          />
        </View>
        <View>
          <Input
            placeholder="Nombre"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="person-outline" />}
            style={styles.input}
            value={nombreUsuario}
            textContentType="username"
            onChangeText={setNombreUsuario}
          />
          <Input
            placeholder="Correo"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="email-outline" />}
            style={styles.input}
            value={email}
            textContentType="emailAddress"
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
            textContentType="newPassword"
          />
          <Input
            placeholder="Edad"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="hash-outline" />}
            style={styles.input}
            value={age}
            textContentType="telephoneNumber"
            onChangeText={val => {
              if (/^\d+$/.test(val)) {
                setAge(val);
              }
            }}
          />
        </View>

        <View style={{marginTop: 20}} />

        <View>
          <MyButton placeholder="Crear" onPress={handleRegisterUser}></MyButton>
        </View>
      </ScrollView>
    </View>
  );
};
