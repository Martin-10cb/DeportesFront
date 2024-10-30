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
import {useState} from 'react';
import {MyIcon} from '../../components/MyIcon';
import {MyButton} from '../../components/MyButton';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleMainScreen = () => {
    navigation.navigate('RegisterUserScreen');
  };

  return (
    <Layout style={{flex: 1}}>
      <View style={styles.imageContenedor}>
        <Image
          source={require('../../img/logo_2.png')}
          style={styles.imageLogo}
          alt="Logo"
        />
      </View>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout>
          <Text category="h1" style={{textAlign: 'center'}}>
            Iniciar sesion
          </Text>
          <Image
            source={require('../../img/profile-userblack.png')}
            style={styles.image}
            alt="Perfil"
          />
        </Layout>
        <Layout>
          <Input
            placeholder="Correo"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="person-outline" />}
            style={{marginBottom: 20}}
            value={nombreUsuario}
            onChangeText={setNombreUsuario}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={() => <MyIcon name="lock-outline" />}
            style={{marginBottom: 20}}
            value={password}
            onChangeText={setPassword}
          />
        </Layout>

        <Layout style={{marginTop: 20}} />

        {/*Boton de inicio de sesion */}
        <Layout>
          <MyButton
            placeholder="Iniciar Sesion"
            onPress={handleMainScreen}></MyButton>
        </Layout>
      </ScrollView>
    </Layout>
  );
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
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageContenedor: {
    width: '100%',
    height: '20%',
  },
});
