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
import { ThemeContext } from '../../../MainApp';


interface Props extends StackScreenProps<RootStackParams, 'RegisterUserScreen'> {}

const lightLogo = require('../../img/logo_2.png');
const darkLogo = require('../../img/logo-white.png');
const lightUser = require('../../img/profile-userblack.png');
const darkUser = require('../../img/profile-userwhite.png');

export const RegisterUserScreen = ({navigation}: Props) => {
  const { theme } = useContext(ThemeContext);
  const {height} = useWindowDimensions();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleMainScreen = () => {
    navigation.navigate('RegisterUserScreen');
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
            placeholder="Correo"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="email-outline" />}
            style={styles.input}
            value={nombreUsuario}
            onChangeText={setNombreUsuario}
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
          <Input
            placeholder="Nombre"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={() => <MyIcon name="person-outline" />}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Edad"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={() => <MyIcon name="hash-outline" />}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={{marginTop: 20}} />

        {/*Boton de inicio de sesion */}
        <View>
          <MyButton placeholder="Crear" onPress={handleMainScreen}></MyButton>
        </View>
      </ScrollView>
    </View>
  );
};