import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../MainApp";

interface Props {
    leftTeamName: string,
    leftTeamProbability: number,
    rightTeamName: string,
    rightTeamProbability: number,
    style?: StyleProp<ViewStyle>
}

export const VictoryProbabilityBar = (props: Props) => {
    const { leftTeamName, leftTeamProbability, rightTeamName, rightTeamProbability} = props;
    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        },
        labelContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16
        },
        barContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 'auto',
            height: 16,
            width: '95%',
            backgroundColor: isDark ? 'lightgray' : '#ccc'
        },
        bar: {
            height: '100%',
            backgroundColor: isDark ? 'white' : '#a9a9a9',
        },
        text: {
            fontSize: 18,
            color: isDark ? 'white' : 'black',
        }
    });

    return (
        <View style={{...props.style as Object, ...styles.container}}>
            <View style={styles.labelContainer}>
                <Text style={styles.text}>{leftTeamName}</Text>
                <Text style={styles.text}>Empate</Text>
                <Text style={styles.text}>{rightTeamName}</Text>
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.text}>{leftTeamProbability}%</Text>
                <Text style={styles.text}>{(100-leftTeamProbability-rightTeamProbability).toPrecision(3)}%</Text>
                <Text style={styles.text}>{rightTeamProbability}%</Text>
            </View>
            <View style={styles.barContainer}>
                <View style={{width: `${leftTeamProbability}%`, ...styles.bar}} />
                <View style={{width: `${rightTeamProbability}%`, ...styles.bar}} />
            </View>
        </View>
    );
}