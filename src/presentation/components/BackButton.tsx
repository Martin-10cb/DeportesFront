import { View, Image } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../MainApp';
import { useNavigation } from '@react-navigation/native';

const iconBlack = require('../img/back-arrow-black.png');
const iconWhite = require('../img/back-arrow-white.png');

export const BackButton = () => {
    const navigation = useNavigation();
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