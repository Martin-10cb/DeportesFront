import {Button, Input, Layout, Text} from '@ui-kitten/components'; // Importa componentes de UI de la biblioteca UI Kitten
import {useWindowDimensions, Alert, StyleSheet} from 'react-native'; // Importa hook para dimensiones de ventana y componente Alert de React Native
import {ScrollView} from 'react-native-gesture-handler'; // Importa componente ScrollView de React Native Gesture Handler
import {RootStackParams} from '../../navigation/StackNavigator'; // Importa tipos de parámetros de navegación
import {StackScreenProps} from '@react-navigation/stack'; // Importa tipos de props de pantalla de la biblioteca de navegación
import {useState} from 'react'; // Importa el hook useState de React
import {MyIcon} from '../../components/MyIcon';

//Define el compoonente
interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

//Define el componente de la pantalla de inicio de sesion
export const LoginScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions(); //Obtiene la altura de la ventana
  const [nombreUsuario, setNombreUsuario] = useState(''); //Estado para el nombre de usuario
  const [password, setPassword] = useState(''); //Estado para la contraseña del usuario

  //Renderiza la interfaz de la pantalla de inicio de sesion
  return (
    <Layout style={{flex: 1}}>
      {/* Encabezado */}
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        {/* inputs del nombre del usuario y contraseña*/}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre de Usuario"
            autoCapitalize="none"
            accessoryLeft={() => <MyIcon name="person-outline" />}
            style={{marginBottom: 10}}
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
          <Button
            accessoryRight={() => <MyIcon name="log-in-outline" white />}
            appearance="filled"
            style={globalStyles.button}>
            <Text>Ingresar</Text>
          </Button>
        </Layout>

        <Layout style={{marginTop: 30}} />

        {/*Enlace de para registro de usuario*/}
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿No tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('RegisterUserScreen')}>
            Crea una
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const globalStyles = StyleSheet.create({
  button: {
    backgroundColor: '#879EF4',
    width: '100%',
    height: 'auto',
    borderRadius: 15,
    justifyContent: 'center',
  },
});
