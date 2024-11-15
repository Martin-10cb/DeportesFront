import { ImageSourcePropType } from "react-native";

const logosPath = '../presentation/img/teams/';

export interface ITeam {
    id: string,
    name: string,
    logo: ImageSourcePropType
}

export const teams: ITeam[] = [
    {
        id: 'ARSENAL',
        name: 'Arsenal',
        logo: require(`${logosPath}arsenal.png`)
    },
    {
        id: 'ASTON VILLA',
        name: 'Aston Villa',
        logo: require(`${logosPath}aston-villa.png`)
    },
    {
        id: 'BRENTFORD',
        name: 'Brentford',
        logo: require(`${logosPath}brentford.png`)
    },
    {
        id: 'BRIGHTON',
        name: 'Brighton',
        logo: require(`${logosPath}brighton.png`)
    },
    {
        id: 'BOURNEMOUTH',
        name: 'Bournemouth',
        logo: require(`${logosPath}bournemouth.png`)
    },
    {
        id: 'BURNLEY',
        name: 'Burnley',
        logo: require(`${logosPath}burnley.png`)
    },
    {
        id: 'CHELSEA',
        name: 'Chelsea',
        logo: require(`${logosPath}chelsea.png`)
    },
    {
        id: 'CRYSTAL PALACE',
        name: 'Crystal Palace',
        logo: require(`${logosPath}crystal-palace.png`)
    },
    {
        id: 'EVERTON',
        name: 'Everton',
        logo: require(`${logosPath}everton.png`)
    },
    {
        id: 'FULHAM',
        name: 'Fulham',
        logo: require(`${logosPath}fulham.png`)
    },
    {
        id: 'LEEDS',
        name: 'Leeds',
        logo: require(`${logosPath}leeds.png`)
    },
    {
        id: 'LEICESTER',
        name: 'Leicester',
        logo: require(`${logosPath}leicester.png`)
    },
    {
        id: 'LIVERPOOL',
        name: 'Liverpool',
        logo: require(`${logosPath}liverpool.png`)
    },
    {
        id: 'MAN UTD',
        name: 'Manchester United',
        logo: require(`${logosPath}man-utd.png`)
    },
    {
        id: 'MAN CITY',
        name: 'Manchester City',
        logo: require(`${logosPath}manchester.png`)
    },
    {
        id: 'NEWCASTLE',
        name: 'Newcastle',
        logo: require(`${logosPath}newcastle.png`)
    },
    {
        id: 'NORWICH',
        name: 'Norwich',
        logo: require(`${logosPath}norwich.png`)
    },
    {
        id: 'SOUTHAMPTON',
        name: 'Southampton',
        logo: require(`${logosPath}southampton.png`)
    },
    {
        id: 'SPURS',
        name: 'Spurs',
        logo: require(`${logosPath}spurs.png`)
    },
    {
        id: 'WATFORD',
        name: 'Watford',
        logo: require(`${logosPath}watford.png`)
    },
    {
        id: 'WEST HAM',
        name: 'West ham',
        logo: require(`${logosPath}west-ham.png`)
    },
    {
        id: 'WOLVES',
        name: 'Wolves',
        logo: require(`${logosPath}wolves.png`)
    },
    {
        id: "NOTT'M FOREST",
        name: "Nott'm Forest",
        logo: require(`${logosPath}nottm-forest.png`)
    }
];