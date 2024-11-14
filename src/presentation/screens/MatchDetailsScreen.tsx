import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useContext, useState } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { BackButton } from '../components/BackButton';
import { ThemeContext } from '../../MainApp';
import { VictoryProbabilityBar } from '../components/VictoryProbabilityBar';
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
        },
        teamPickerContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 16
        },
        teamPickerText: {
            width: '50%',
            fontSize: 18,
            color: isDark ? 'white' : 'black'
        },
        bigLogo: {
            width: 120,
            height: 120,
            marginHorizontal: 'auto',
            marginVertical: 16
        },
        predictionLabel: {
            fontSize: 18,
            color: isDark ? 'white' : 'black',
            textAlign: 'center',
            marginVertical: 12
        },
        probabilityBar: {
            marginTop: 16,
            marginBottom: 32
        }
    });

    const [selectedTeamId, setSelectedTeamId] = useState(leftTeam.id);
    const selectedTeam = leftTeam.id == selectedTeamId ? leftTeam : rightTeam;

    return (
        <>
            <Header />
            <BackButton />
            <MatchCard leftTeamLogo={leftTeam.logo} rightTeamLogo={rightTeam.logo} />
            <VictoryProbabilityBar
                leftTeamName={leftTeam.name}
                leftTeamProbability={53.2}
                rightTeamName={rightTeam.name}
                rightTeamProbability={32.3}
                style={styles.probabilityBar}
            />
            <View style={styles.teamPickerContainer}>
                <Text style={styles.teamPickerText}>Predicción a partir del</Text>
                <Picker
                    style={styles.teamPickerText}
                    selectedValue={selectedTeamId}
                    onValueChange={setSelectedTeamId}
                >
                    <Picker.Item label={leftTeam.name} value={leftTeam.id} />
                    <Picker.Item label={rightTeam.name} value={rightTeam.id} />
                </Picker>
            </View>
            <Image style={styles.bigLogo} source={selectedTeam.logo} resizeMode='contain' />
            <Text style={styles.predictionLabel}>Probabilidad de victoria: 53.2%</Text>
            <Text style={styles.predictionLabel}>Goles promedio del partido: 2.8</Text>
            <Text style={styles.predictionLabel}>Corners promedio del partido: 18.3</Text>
        </>
    );
};