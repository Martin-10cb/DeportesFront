import { View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext } from 'react';
import { ThemeContext } from '../../MainApp';

const iconBlack = require('../img/back-arrow-black.png');
const iconWhite = require('../img/back-arrow-white.png');

interface Props {
    navigation: StackNavigationProp<any>
}

export const BackButton = ({ navigation }: Props) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';
    const icon = isDark ? iconWhite : iconBlack;

    return (
        <View style={{ width: 32, height: 32 }} onTouchEnd={() => {
            if (navigation?.canGoBack()) {
                navigation.goBack();
            }
         }}>
            <Image style={{ width: '100%', height: '100%' }} source={icon}/>
        </View>
    );
};