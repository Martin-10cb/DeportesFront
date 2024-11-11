import { FlatList, StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { BackButton } from '../components/BackButton';
import { ThemeContext } from '../../MainApp';
import { teams } from '../../data/teams';

interface Props extends StackScreenProps<RootStackParams, 'MatchDetailsScreen'> {}

export const MatchDetailsScreen = ({ navigation, route }: Props) => {
    const { leftTeamId, rightTeamId } = route.params;

    const leftTeam = teams.find(team => team.id == leftTeamId);
    const rightTeam = teams.find(team => team.id == rightTeamId);

    if (!leftTeam || !rightTeam) {
        return <Text>No se encontró algún equipo</Text>;
    }

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
            <BackButton />
            <MatchCard leftTeamLogo={leftTeam.logo} rightTeamLogo={rightTeam.logo} />
        </>
    );
};