import { Alert, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { MatchCard } from '../components/MatchCard';
import { BackButton } from '../components/BackButton';
import { ThemeContext, APIContext } from '../../MainApp';
import { VictoryProbabilityBar } from '../components/VictoryProbabilityBar';
import { teams } from '../../data/teams';

interface Props extends StackScreenProps<RootStackParams, 'MatchDetailsScreen'> {}

interface IPrediction {
    probabilidad_equipo_1: number,
    probalidad_empate: number,
    probabilidad_equipo_2: number,
    nombre_equipo_local: string,
    nombre_equipo_visitante: string,
    goles_promedio: number,
    corners_promedio: number
}

export const MatchDetailsScreen = ({ navigation, route }: Props) => {
    const { leftTeamId, rightTeamId } = route.params;
    const leftTeam = teams.find(team => team.id == leftTeamId);
    const rightTeam = teams.find(team => team.id == rightTeamId);

    if (!leftTeam || !rightTeam) {
        return <Text>No se encontró algún equipo</Text>;
    }

    const { theme } = useContext(ThemeContext);
    const isDark = theme == 'dark';

    const { apiUrl } = useContext(APIContext);
    const [prediction, setPrediction] = useState<undefined | IPrediction>();

    useEffect(() => {
        const body = new FormData();
        body.append('home_team', leftTeam.id);
        body.append('away_team', rightTeam.id);

        const res = fetch(`${apiUrl}/predict`, {
            method: 'POST',
            body: body
        })
        .then(async res => {
            if (!res.ok) {
                throw new Error(`Respuesta ${res.status}\n${await res.text()}`);
            }

            const json = await res.json();
            console.log(json);
            setPrediction(json);
        })
        .catch(error => {
            Alert.alert('Error al predecir', error.message);
        });
    }, []);

    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            color: isDark ? 'white' : 'black',
        },
        predictionLabel: {
            fontSize: 18,
            color: isDark ? 'white' : 'black',
            textAlign: 'center',
            marginVertical: 16
        },
        probabilityBar: {
            marginTop: 16,
            marginBottom: 40
        },
        activityIndicator: {
            width: 30,
            height: 30,
            margin: 'auto'
        }
    });

    return (
        <>
            <Header />
            <BackButton />
            <MatchCard leftTeamLogo={leftTeam.logo} rightTeamLogo={rightTeam.logo} />
            { prediction ? (
                <>
                    <Text style={styles.predictionLabel}>Probabilidad de victoria</Text>
                    <VictoryProbabilityBar
                        leftTeamName={prediction.nombre_equipo_local}
                        leftTeamProbability={prediction.probabilidad_equipo_1}
                        rightTeamName={prediction.nombre_equipo_visitante}
                        rightTeamProbability={prediction.probabilidad_equipo_2}
                        drawProbability={prediction.probalidad_empate}
                        style={styles.probabilityBar}
                    />
                    <Text style={styles.predictionLabel}>Goles promedio del partido: {prediction.goles_promedio}</Text>
                    <Text style={styles.predictionLabel}>Corners promedio del partido: {prediction.corners_promedio}</Text>
                </>
            ) : (
                <ActivityIndicator style={styles.activityIndicator} />
            )}
        </>
    );
};