import { FlatList } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { LeagueCard } from '../components/LeagueCard';

interface Props extends StackScreenProps<RootStackParams, 'LeagueListScreen'> {}

const leagues = [
    {
        name: 'Champions League',
        img: require('../img/leagues/champions.png')
    },
    {
        name: 'Premier League',
        img: require('../img/leagues/premier.png')
    },
    {
        name: 'LALIGA',
        img: require('../img/leagues/laliga.png')
    },
    {
        name: 'Bundesliga',
        img: require('../img/leagues/bundesliga.png')
    }
];

export const LeagueListScreen = ({ }) => {
    return (
        <>
            <Header />
            <FlatList
                data={leagues}
                renderItem={({ item }) => <LeagueCard logo={item.img} name={item.name} />}
                keyExtractor={(item, index) => String(index)}
            />
        </>
    );
};