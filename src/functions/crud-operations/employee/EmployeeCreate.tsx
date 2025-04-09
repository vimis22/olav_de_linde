import firestore from '@react-native-firebase/firestore';
import {EmployeeInfo} from './EmployeeInfo.ts';
import auth from '@react-native-firebase/auth';
import {EnumMessages} from '../EnumMessages.ts';
export const createAllEmployees = async (allEmployeeInfo: EmployeeInfo[]): Promise<number> => {
    try{
        if (!allEmployeeInfo || allEmployeeInfo.length === 0){
            return -2;
        }

        const batch = firestore().batch();

        allEmployeeInfo.forEach(employee => {
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
        return 1;
    } catch (error) {
        console.error('An Error occurred in createEmployee', error);
        return -1;
    }
};

export const createEmployeeWithEmail = async (email: string, password: string): Promise<number> => {
    try{
        //Vi laver vores konto i authentication.
        const credentials = await auth().createUserWithEmailAndPassword(email, password);
        const {uid} = credentials.user;
        //Vi har fyldt email: email og password: password, hvor de resterende er med '' og det er fordi vi vil gerne fylde blanke værdier på dem.
        let employeeInfo: EmployeeInfo = {
            id: uid,
            email: email,
            password: password,
            name: '',
            phone: '',
            address: '',
            role: '',
            country: '',
            zipcode: '',
        };

        //Kontoen som er lavet i Authentication bliver automatisk oprettet i firestore.
        const employeeValue = [employeeInfo];
        let num = createAllEmployees(employeeValue);
        //Her kaldes fejlbesked fra Enum;
        let message = EnumMessages(await num);

        console.log('An Employee has been created successfully with an email', email, message);
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

