//Declaramos nuestras variables para poder usar las variables de ambiente dentro de nuestra aplicacion
declare module 'react-native-dotenv' {
  export const STAGE: string;
  export const API_URL: string;
  export const API_URL_IOS: string;
  export const API_URL_ANDROID: string;
  export const IMAGE_URL: string;
}
