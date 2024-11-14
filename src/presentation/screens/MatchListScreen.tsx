import { FlatList, StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { LeagueCard } from '../components/LeagueCard';
import { leagues } from '../../data/leagues';
import { BackButton } from '../components/BackButton';
import { ThemeContext } from '../../MainApp';
import { matches } from '../../data/matches';
import { teams } from '../../data/teams';

interface Props extends StackScreenProps<RootStackParams, 'MatchListScreen'> {}

export const MatchListScreen = ({ navigation, route }: Props) => {
    const { leagueId } = route.params;
    const league = leagues.find(item => item.id == route.params.leagueId);

    if (!league) {
        return <Text>Liga "{leagueId}" no encontrada</Text>;
    }

    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';

    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: isDark ? 'white' : 'black',
            marginVertical: 8,
            paddingLeft: 16
        }
    });

    return (
        <>
            <Header />
            <BackButton />
            <LeagueCard name={league.name} logo={league.logo} />
            <Text style={styles.text} >Próximos partidos</Text>
            <FlatList
                data={matches}
                renderItem={({ item }) => {
                    const leftTeam = teams.find(team => team.id == item.firstTeamId);
                    const rightTeam = teams.find(team => team.id == item.secondTeamId);

                    if (!leftTeam || !rightTeam) {
                        return <Text>No se encontró algún equipo</Text>;
                    }

                    return (
                        <MatchCard
                            leftTeamLogo={leftTeam.logo}
                            rightTeamLogo={rightTeam.logo}
                            onPress={() => {
                                navigation.navigate('MatchDetailsScreen', {
                                    leftTeamId: leftTeam.id,
                                    rightTeamId: rightTeam.id
                                });
                            }}
                        />
                    );
                }}
                keyExtractor={(item, index) => String(index)}
            />
        </>
    );
};