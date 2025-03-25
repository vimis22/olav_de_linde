import {initializeApp} from 'react-native-gesture-handler/lib/typescript/init';
import {initializeAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCduSvkA_WmNW-lOPWLcgT_3Z7GWJ8RTiw",
    authDomain: "olav-de-linde-da446.firebaseapp.com",
    projectId: "olav-de-linde-da446",
    storageBucket: "olav-de-linde-da446.firebasestorage.app",
    messagingSenderId: "307309133855",
    appId: "1:307309133855:web:c6b4ac0fa30f25b901552a",
    measurementId: "G-H9EFBX60QH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
