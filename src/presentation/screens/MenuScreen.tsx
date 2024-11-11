import { FlatList, StyleSheet, Text, Image } from 'react-native';
import { useContext } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../../MainApp';
import { ThemeButton } from '../components/ThemeButton';

const logoWhite = require('../img/full-logo-white.png');
const logoBlack = require('../img/full-logo-black.png');

interface Props extends StackScreenProps<RootStackParams, 'MenuScreen'> {}

interface IOption {
    text: string,
    onPress: Function
}

export const MenuScreen = ({ navigation }: Props) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';
    const logo = isDark ? logoWhite : logoBlack;

    const options: IOption[] = [
        {
            text: 'Ligas',
            onPress: () => navigation.navigate('LeagueListScreen')
        },
        {
            text: 'Cerrar sesión',
            onPress: () => navigation.navigate('WelcomeScreen')
        }
    ];

    const styles = StyleSheet.create({
        option: {
            fontSize: 18,
            color: isDark ? 'white' : 'black',
            paddingVertical: 16,
            paddingLeft: 16,
            borderColor: 'gray',
            borderStyle: 'solid',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0
        },
        themeButtonContainer: {
            position: 'absolute',
            left: 20,
            bottom: 100
        },
        logo: {
            width: '80%',
            height: 200,
            marginVertical: 32,
            marginHorizontal: 'auto'
        }
    });

    return (
        <>
            <Image style={styles.logo} source={logo} />
            <FlatList
                data={options}
                renderItem={({ item }) => (
                    <Text style={styles.option} onPress={() => item.onPress()}>{item.text}</Text>
                )}
                keyExtractor={(item, index) => String(index)}
            />

            <ThemeButton style={styles.themeButtonContainer} />
        </>
    );
};