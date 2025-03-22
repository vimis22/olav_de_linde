import {StyleSheet} from 'react-native';

export const wallpaperBackground = require('../assets/OLD_Background.png');
export const logoImage = require('../assets/OLD_Logo.png');
export const houseLocationImage = require('../assets/HouseLocationImage.png');

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#330099',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    logoImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainLogo: {
        width: 150,
        height: 250,
        marginBottom: 20,
    },
    rotationalLogo: {
        width: 100,
        height: 200,
        marginBottom: 10,
    },
});
