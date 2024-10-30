import { API_URL_ANDROID, API_URL_IOS, API_URL as PROD_URL, STAGE} from 'react-native-dotenv';
import axios  from "axios";
import { Platform } from "react-native";

//Nos permite conectarnos a nuestra API para obtener la informacion de la base de datos, 
//accediendo a las variables de entorno para modificar unicamente esos links en caso de 
//ser necesario

export const API_URL =
    (STAGE === 'prod')
        ? PROD_URL
        : Platform.OS === 'ios'
            ? API_URL_IOS
            : API_URL_ANDROID

const deportesApi = axios.create ({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

//Este sera el componente al que vamos a acceder cuando ocupemos el link
export {
    deportesApi,
}
