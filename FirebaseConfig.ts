import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Her er dine Firebase-kontooplysninger:
const firebaseConfig = {
    apiKey: 'AIzaSyCduSvkA_WmNW-lOPWLcgT_3Z7GWJ8RTiw',
    authDomain: 'olav-de-linde-da446.firebaseapp.com',
    projectId: 'olav-de-linde-da446',
    storageBucket: 'olav-de-linde-da446.firebasestorage.app',
    messagingSenderId: '307309133855',
    appId: '1:307309133855:web:c6b4ac0fa30f25b901552a',
    measurementId: 'G-H9BEEF60QH',
};

// Initialisér Firebase appen
if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
}
export { app };

// Initialisér auth med AsyncStorage som persistence-lag
export const authInstance = auth();
