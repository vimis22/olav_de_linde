import {StyleSheet} from 'react-native';

/**
 * GlobalStyles is where common styles among screens are located with reference to icons.
 */
export const wallpaperBackground = require('../assets/home/OLD_Background.png');
export const logoImage = require('../assets/authentication/start/OLD_Logo.png');
export const houseLocationImage = require('../assets/home/HouseLocationImage.png');
export const userIcon = require('../assets/technicians/OLD_UserIcon.png');
export const lockIcon = require('../assets/authentication/signup/OLD_LockIcon.png');
export const houseIcon = require('../assets/authentication/start/OLD_HouseIcon.png');
export const locationIcon = require('../assets/authentication/start/OLD_LocationIcon.png');
export const tickMarkIcon = require('../assets/settings/OLD_TickMarkIcon.png');
export const callIcon = require('../assets/authentication/signup/OLD_CallIcon.png');
export const biometricsVerificationImage = require('../assets/authentication/verification/OLD_Biometrics.png');
export const notificationsVerificationImage = require('../assets/authentication/verification/OLD_Notification.png');
export const pentiaHouseBackground = require('../assets/case/OLD_PentiaHouse.png');
export const plusIcon = require('../assets/case/OLD_PlusIcon.png');
export const documentIcon = require('../assets/settings/OLD_DocumentIcon.png');
export const protectionIcon = require('../assets/settings/OLD_ProtectionIcon.png');
export const logIcon = require('../assets/authentication/signup/OLD_LogIcon.png');
export const atIcon = require('../assets/authentication/signup/OLD_AtIcon.png');
export const alphabetIcon = require('../assets/case/OLD_Alphabet.png');
export const imageIcon = require('../assets/case/OLD_ImageIcon.png');
export const electricityIcon = require('../assets/technicians/OLD_ElectricityIcon.png');
export const waterIcon = require('../assets/technicians/OLD_WaterIcon.png');
export const hammerIcon = require('../assets/technicians/OLD_HammerIcon.png');
export const paintingIcon = require('../assets/technicians/OLD_PaintingIcon.png');
export const calenderIcon = require('../assets/case/OLD_CalenderIcon.png');
export const screwDriverIcon = require('../assets/technicians/OLD_ScrewDriverIcon.png');
export const penIcon = require('../assets/case/OLD_PenIcon.png');
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
