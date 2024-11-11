import { FlatList, StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { BackButton } from '../components/BackButton';
import { ThemeContext } from '../../MainApp';

interface Props extends StackScreenProps<RootStackParams, 'MatchDetailsScreen'> {}

export const MatchDetailsScreen = ({ navigation, route }: Props) => {
    const { leftTeamLogo, rightTeamLogo } = route.params;

    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';

    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            color: isDark ? 'white' : 'black',
        }
    });

    return (
        <>
            <Header />
            <BackButton navigation={navigation} />
            <MatchCard leftTeamLogo={leftTeamLogo} rightTeamLogo={rightTeamLogo} />
        </>
    );
};