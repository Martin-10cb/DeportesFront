import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../MainApp';

const backgroundImg = require('../img/field.jpeg');
const versusImg = require('../img/versus.png');

interface Props {
    leftTeamLogo: ImageSourcePropType,
    rightTeamLogo: ImageSourcePropType,
    margin?: number
    onPress?: Function,
}

export const GameCard = (props: Props) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';

    const styles = StyleSheet.create({
        gameCard: {
            backgroundColor: isDark ? 'gray' : 'white',
            marginVertical: typeof props.margin == 'number' ? props.margin : 8
        },
        gameCardContent: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: 24,
            paddingVertical: 16,
            paddingHorizontal: 32
        },
        backgroundImg: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.5
        },
        logo: {
            width: 64,
            height: 64
        },
        versus: {
            width: 64,
            height: 64
        }
    });

    return (
        <View style={styles.gameCard} onTouchEnd={() => props.onPress?.()}>
            <Image style={styles.backgroundImg} source={backgroundImg} />
            <View style={styles.gameCardContent}>
                <Image style={styles.logo} resizeMode='contain' source={props.leftTeamLogo} />
                <Image style={styles.versus} resizeMode='contain' source={versusImg} />
                <Image style={styles.logo} resizeMode='contain' source={props.rightTeamLogo} />
            </View>
        </View>
    );
};

