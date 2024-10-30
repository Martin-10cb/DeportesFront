import { Icon, useTheme } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet} from 'react-native'

// Definición de las propiedades que acepta el componente
interface Props {
    //Atrubutos del componentr y sus tipos de datos 
    name: string
    color?: string
    white?: boolean
}

// Componente MyIcon que muestra un ícono con estilos basados en el tema
export const MyIcon = ({name, color, white = false}:Props) => {

    const theme = useTheme();
    // Determinamos el color del ícono basado en las props y el tema
    if (white) {
        color = theme['color-info-100'];
    } else if (!color){
        color = theme['text-basic-color']
    } else{
        color = theme [color] ?? theme['text-basic-color']
    }

    //Aplica los estilos al icono
    return (
        <Icon
            style={styles.icon}
            fill={color}
            name= {name}
        />
    )
}

// Estilos del componente
const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    }
})
