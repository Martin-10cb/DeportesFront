import { ImageSourcePropType } from "react-native";

const logosPath = '../presentation/img/teams/';

export interface ITeam {
    id: string,
    name: string,
    logo: ImageSourcePropType
}

export const teams: ITeam[] = [
    {
        id: 'arsenal',
        name: 'Arsenal',
        logo: require(`${logosPath}arsenal.png`)
    },
    {
        id: 'aston-villa',
        name: 'Aston Villa',
        logo: require(`${logosPath}aston-villa.png`)
    },
    {
        id: 'brentford',
        name: 'Brentford',
        logo: require(`${logosPath}brentford.png`)
    },
    {
        id: 'brighton',
        name: 'Brighton',
        logo: require(`${logosPath}brighton.png`)
    },
    {
        id: 'bournemouth',
        name: 'Bournemouth',
        logo: require(`${logosPath}bournemouth.png`)
    },
    {
        id: 'burnley',
        name: 'Burnley',
        logo: require(`${logosPath}burnley.png`)
    },
    {
        id: 'chelsea',
        name: 'Chelsea',
        logo: require(`${logosPath}chelsea.png`)
    },
    {
        id: 'crystal-palace',
        name: 'Crystal Palace',
        logo: require(`${logosPath}crystal-palace.png`)
    },
    {
        id: 'everton',
        name: 'Everton',
        logo: require(`${logosPath}everton.png`)
    },
    {
        id: 'fulham',
        name: 'Fulham',
        logo: require(`${logosPath}fulham.png`)
    },
    {
        id: 'leeds',
        name: 'Leeds',
        logo: require(`${logosPath}leeds.png`)
    },
    {
        id: 'leicester',
        name: 'Leicester',
        logo: require(`${logosPath}leicester.png`)
    },
    {
        id: 'liverpool',
        name: 'Liverpool',
        logo: require(`${logosPath}liverpool.png`)
    },
    {
        id: 'man-utd',
        name: 'Manchester United',
        logo: require(`${logosPath}man-utd.png`)
    },
    {
        id: 'manchester',
        name: 'Manchester City',
        logo: require(`${logosPath}manchester.png`)
    },
    {
        id: 'newcastle',
        name: 'Newcastle',
        logo: require(`${logosPath}newcastle.png`)
    },
    {
        id: 'norwich',
        name: 'Norwich',
        logo: require(`${logosPath}norwich.png`)
    },
    {
        id: 'southampton',
        name: 'Southampton',
        logo: require(`${logosPath}southampton.png`)
    },
    {
        id: 'spurs',
        name: 'Spurs',
        logo: require(`${logosPath}spurs.png`)
    },
    {
        id: 'watford',
        name: 'Watford',
        logo: require(`${logosPath}watford.png`)
    },
    {
        id: 'west-ham',
        name: 'West ham',
        logo: require(`${logosPath}west-ham.png`)
    },
    {
        id: 'wolves',
        name: 'Wolves',
        logo: require(`${logosPath}wolves.png`)
    },
    {
        id: 'nottm-forest',
        name: 'Nottingham Forest',
        logo: require(`${logosPath}nottm-forest.png`)
    }
];