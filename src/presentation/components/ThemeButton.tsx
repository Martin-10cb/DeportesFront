import { StyleSheet, View, Image } from "react-native";
import { ThemeContext } from "../../MainApp";
import { useContext } from "react";

export const ThemeButton = ({ style }: {style?: object}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <View style={{...style, ...styles.button}} onTouchEnd={toggleTheme}>
            <Image source={require('../img/moonprueba.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        width: 'auto',
        height: 'auto'
    },
    image: {
        width: 50,
        height: 50
    }
});