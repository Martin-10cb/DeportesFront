import { ImageSourcePropType } from "react-native";

const logosPath = '../presentation/img/leagues/';

export interface ILeague {
    id: string,
    name: string,
    logo: ImageSourcePropType,
    enabled: boolean
}

export const leagues: ILeague[] = [
    {
        id: 'premier',
        name: 'Premier League',
        logo: require(`${logosPath}premier.png`),
        enabled: true
    },
    {
        id: 'champions',
        name: 'Champions League',
        logo: require(`${logosPath}champions.png`),
        enabled: false
    },
    {
        id: 'laliga',
        name: 'LALIGA',
        logo: require(`${logosPath}/laliga.png`),
        enabled: false
    },
    {
        id: 'bundesliga',
        name: 'Bundesliga',
        logo: require(`${logosPath}bundesliga.png`),
        enabled: false
    }
];