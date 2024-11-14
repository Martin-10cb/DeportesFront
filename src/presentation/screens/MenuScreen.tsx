import { FlatList, StyleSheet, Text, Image, TextInput } from 'react-native';
import { useContext } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../../MainApp';
import { ThemeButton } from '../components/ThemeButton';
import { APIContext } from '../../MainApp';

const logoWhite = require('../img/full-logo-white.png');
const logoBlack = require('../img/full-logo-black.png');

interface Props extends StackScreenProps<RootStackParams, 'MenuScreen'> {}

interface IOption {
    text: string,
    onPress: Function
}

export const MenuScreen = ({ navigation }: Props) => {
    const { apiUrl, setApiUrl } = useContext(APIContext);
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
        },
        textInput: {
            borderTopColor: 'gray',
            borderWidth: 1,
            borderStyle: 'solid',
            padding: 8,
            fontSize: 12,
            color: isDark ? 'white' : 'black'
        },
        label: {
            fontSize: 12,
            color: isDark ? 'white' : 'black',
            marginVertical: 8,
            paddingHorizontal: 8
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

            <Text style={styles.label}>URL de la API</Text>
            <TextInput style={styles.textInput} value={apiUrl} onChangeText={text => setApiUrl(text)} />

            <ThemeButton style={styles.themeButtonContainer} />
        </>
    );
};