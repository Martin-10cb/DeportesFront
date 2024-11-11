import { ImageSourcePropType } from "react-native";

interface ILeague {
    id: string,
    name: string,
    logo: ImageSourcePropType,
    enabled: boolean
}

export const leagues: ILeague[] = [
    {
        id: 'premier',
        name: 'Premier League',
        logo: require('../presentation/img/leagues/premier.png'),
        enabled: true
    },
    {
        id: 'champions',
        name: 'Champions League',
        logo: require('../presentation/img/leagues/champions.png'),
        enabled: false
    },
    {
        id: 'laliga',
        name: 'LALIGA',
        logo: require('../presentation/img/leagues/laliga.png'),
        enabled: false
    },
    {
        id: 'bundesliga',
        name: 'Bundesliga',
        logo: require('../presentation/img/leagues/bundesliga.png'),
        enabled: false
    }
];