import { FlatList } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { LeagueCard } from '../components/LeagueCard';
import { leagues } from '../../data/leagues';

interface Props extends StackScreenProps<RootStackParams, 'LeagueListScreen'> {}

export const LeagueListScreen = ({ navigation }: Props) => {
    return (
        <>
            <Header />
            <FlatList
                data={leagues}
                renderItem={({ item }) => (
                    <LeagueCard 
                        logo={item.logo} 
                        name={item.name}
                        onPress={() => {
                            if (item.id) {
                                navigation.navigate('MatchListScreen', { leagueId: item.id });
                            }
                        }}
                    />
                )}
                keyExtractor={(item, index) => String(index)}
            />
        </>
    );
};