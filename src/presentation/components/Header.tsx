import { View, Text, Image, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../MainApp';

const logo = require('../img/logo.png');
const menuIconLight = require('../img/menu-black.png');
const menuIconDark = require('../img/menu-white.png');

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';

    const menuIcon = isDark ? menuIconDark : menuIconLight;

    const styles = StyleSheet.create({
        header: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16
        },
        logoContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
        },
        logo: {
            height: 50,
            width: 50
        },
        text: {
            color: isDark ? 'white' : 'black',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Inter'
        },
        menuIconContainer: {
            height: 32,
            width: 32
        },
        menuIcon: {
            height: '100%',
            width: '100%'
        }
    });

    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.text}>SPORTANALYTICS</Text>
            </View>
            <View style={styles.menuIconContainer}>
                <Image style={styles.menuIcon} source={menuIcon} />
            </View>
        </View>
    );
};
