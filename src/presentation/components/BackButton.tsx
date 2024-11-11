import { View, Image, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../MainApp';

const iconBlack = require('../img/back-arrow-black.png');
const iconWhite = require('../img/back-arrow-white.png');

interface Props {
    onClick?: Function
}

export const BackButton = ({ onClick }: Props) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';
    const icon = isDark ? iconWhite : iconBlack;

    return (
        <View style={{ width: 32, height: 32 }} onTouchEnd={() => { onClick?.() }}>
            <Image style={{ width: '100%', height: '100%' }} source={icon}/>
        </View>
    );
};