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

interface Props extends StackScreenProps<RootStackParams, 'MatchListScreen'> {}

const games = [
    {
        teamA: require('../img/teams/arsenal.png'),
        teamB: require('../img/teams/brentford.png')
    },
    {
        teamA: require('../img/teams/manchester.png'),
        teamB: require('../img/teams/norwich.png')
    },
    {
        teamA: require('../img/teams/wolves.png'),
        teamB: require('../img/teams/leeds.png')
    },
    {
        teamA: require('../img/teams/southampton.png'),
        teamB: require('../img/teams/newcastle.png')
    },
    {
        teamA: require('../img/teams/arsenal.png'),
        teamB: require('../img/teams/brentford.png')
    },
    {
        teamA: require('../img/teams/manchester.png'),
        teamB: require('../img/teams/norwich.png')
    },
    {
        teamA: require('../img/teams/wolves.png'),
        teamB: require('../img/teams/leeds.png')
    },
    {
        teamA: require('../img/teams/southampton.png'),
        teamB: require('../img/teams/newcastle.png')
    },
];

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
            marginVertical: 8
        }
    });

    return (
        <>
            <Header />
            <BackButton onClick={() => navigation.navigate('LeagueListScreen')} />
            <LeagueCard name='Champions' logo={league.logo} />
            <Text style={styles.text} >Jornada XX</Text>
            <FlatList
                data={games}
                renderItem={({ item }) => (
                    <MatchCard
                        leftTeamLogo={item.teamA}
                        rightTeamLogo={item.teamB}
                    />
                )}
                keyExtractor={(item, index) => String(index)}
            />
        </>
    );
};