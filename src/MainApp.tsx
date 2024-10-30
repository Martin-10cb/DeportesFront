//Realizamos la simportaciones de librerias, ademas el navegador entre pantallas

import 'react-native-gesture-handler';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {useColorScheme} from 'react-native';

//Exportamos el componente principal de la aplicacion
export const MainApp = () => {
  // Hook para obtener el esquema de color del sistema (modo claro u oscuro)
  const colorScheme = useColorScheme();
  // Determinar el tema basado en el esquema de color
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  // Establecer el color de fondo basado en el tema
  const backgroundColor =
    colorScheme === 'dark'
      ? theme['color-basic-800']
      : theme['color-basic-100'];

  // Renderizar el componente
  return (
    <>
      {/* Registro de íconos con el paquete de íconos de Eva */}
      <IconRegistry icons={EvaIconsPack} />
      {/* Proveedor de la aplicación con el tema seleccionado */}
      <ApplicationProvider {...eva} theme={theme}>
        {/* Contenedor de navegación configurado con los colores del tema */}
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: theme['color-primary-500'],
              background: backgroundColor,
              card: theme['color-basic-100'],
              text: theme['text-basic-color'],
              border: theme['color-basic-800'],
              notification: theme['color-primary-500'],
            },
          }}>
          {/* Componente personalizado para gestionar la navegación tipo stack */}
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
