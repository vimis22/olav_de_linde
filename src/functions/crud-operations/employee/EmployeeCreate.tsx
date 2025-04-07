import firestore from '@react-native-firebase/firestore';
import {EmployeeInfo} from './EmployeeInfo.ts';
import auth from '@react-native-firebase/auth';

export const createAllEmployees = async (all: EmployeeInfo[]): Promise<number> => {
    try{
        if (!all || all.length === 0) return -1;

        const batch = firestore().batch();

        all.forEach(employee => {
            const employeeRef = firestore().collection('Employee').doc(employee.id);
            batch.set(employeeRef, {
                name: employee.name,
                role: employee.role,
                email: employee.email,
                phone: employee.phone,
                address: employee.address,
                country: employee.country,
                zipcode: employee.zipcode,
                createAt: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 0;
    } catch (error) {
        console.error('An Error occurred in createEmployee', error);
        return -1;
    }
};

export const createEmployeeWithEmail = async (email: string, password: string): Promise<number> => {
    try{
        const credentials = await auth().createUserWithEmailAndPassword(email, password);
        const {uid} = credentials.user;

        await firestore().collection('Employee').doc(uid).set({
            email: email,
            password: password,
            createdAt: firestore.FieldValue.serverTimestamp(),
        });

        console.log('An Employee has been created successfully with an email', email);
        return 0;
    } catch (error) {
        console.error('An Error occured in createEmployeeWithEmail:', error);
        return -1;
    }
};

// export const createEmployeeWithEmail(email: string, password: string){
//     try{
//         const credentials = await auth().createUserWithEmailAndPassword(email, password);
//         console.log(`Creation of User: ${credentials.user.email} succeeded`);
//         return credentials.user;
//     } catch (error: any){
//         console.log('An unexpected error occured at signup', error?.code, error?.message);
//         throw error;
//     }
// }

