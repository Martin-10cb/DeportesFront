import { ImageSourcePropType } from "react-native";

interface ILeague {
    id: string,
    name: string,
    logo: ImageSourcePropType
}

export const leagues: ILeague[] = [
    {
        id: 'champions',
        name: 'Champions League',
        logo: require('../presentation/img/leagues/champions.png'),
    },
    {
        id: 'premier',
        name: 'Premier League',
        logo: require('../presentation/img/leagues/premier.png')
    },
    {
        id: 'laliga',
        name: 'LALIGA',
        logo: require('../presentation/img/leagues/laliga.png')
    },
    {
        id: 'bundesliga',
        name: 'Bundesliga',
        logo: require('../presentation/img/leagues/bundesliga.png')
    }
];