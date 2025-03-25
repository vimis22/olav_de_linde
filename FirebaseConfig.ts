import { initializeApp } from 'firebase/app';
import {initializeAuth} from 'firebase/auth';

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
export const app = initializeApp(firebaseConfig);

// Initialisér auth med AsyncStorage som persistence-lag
export const auth = initializeAuth(app);
