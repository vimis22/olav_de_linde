import {StyleSheet} from 'react-native';

export const wallpaperBackground = require('../assets/OLD_Background.png');
export const logoImage = require('../assets/OLD_Logo.png');
export const houseLocationImage = require('../assets/HouseLocationImage.png');
export const userIcon = require('../assets/OLD_UserIcon.png');
export const lockIcon = require('../assets/OLD_LockIcon.png');
export const houseIcon = require('../assets/OLD_HouseIcon.png');
export const locationIcon = require('../assets/OLD_LocationIcon.png');
export const tickMarkIcon = require('../assets/OLD_TickMarkIcon.png');
export const callIcon = require('../assets/OLD_CallIcon.png');
export const locationLoadingIcon = require('../assets/OLD_LocationLoadingIcon.png');
export const houseLoadingIcon = require('../assets/OLD_HouseLoadingIcon.png');
export const biometricsVerificationImage = require('../assets/OLD_Biometrics.png');
export const notificationsVerificationImage = require('../assets/OLD_Notification.png');
export const pentiaHouseBackground = require('../assets/OLD_PentiaHouse.png');
export const plusIcon = require('../assets/OLD_PlusIcon.png');
export const documentIcon = require('../assets/OLD_DocumentIcon.png');
export const protectionIcon = require('../assets/OLD_ProtectionIcon.png');
export const logIcon = require('../assets/OLD_LogIcon.png');
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
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 12,
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconPlacement: {
        marginRight: 8,
        backgroundColor: '#990069',
    },
    circleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 8,
    },
    iconCircle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
    },
    textButton: {
        fontWeight: 'bold',
    },
    popupContainer: {
        backgroundColor: '#F9F9F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50%',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
