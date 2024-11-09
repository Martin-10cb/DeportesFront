import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../MainApp';

const backgroundImg = require('../img/field-bg.jpeg');

interface Props {
    name: string,
    logo: ImageSourcePropType,
    margin?: number
    onPress?: Function,
}

export const LeagueCard = (props: Props) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';

    const styles = StyleSheet.create({
        leagueCard: {
            backgroundColor: isDark ? 'gray' : 'white',
            marginVertical: typeof props.margin == 'number' ? props.margin : 8
        },
        leagueCardContent: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 80,
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
        text: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textShadowOffset: { width: 0, height: 0},
            textShadowColor: isDark ? 'white' : 'transparent',
            textShadowRadius: 8
        }
    });

    return (
        <View style={styles.leagueCard} onTouchEnd={() => props.onPress?.()}>
            <Image style={styles.backgroundImg} source={backgroundImg} />
            <View style={styles.leagueCardContent}>
                <Image style={styles.logo} resizeMode='contain' source={props.logo} />
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </View>
    );
};

