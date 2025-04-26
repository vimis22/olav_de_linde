import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';
import {EnumMessages} from '../../EnumMessages.ts';
export const createAllEmployees = async (allEmployeeInfo: UserInfo[]): Promise<number> => {
    try{
        if (!allEmployeeInfo || allEmployeeInfo.length === 0){
            return -2;
        }

        const batch = firestore().batch();

        allEmployeeInfo.forEach(employee => {
            const employeeRef = firestore().collection('Employee').doc(employee.id);
            batch.set(employeeRef, {
              //Vi har fjernet role, fordi den bliver oprettet uanset hvad. Hvilket er en ulempe ift. dokument-databaser.
              //Du har en foreign key ved tabellen mellem Employee og Role og det gør at foreign key vil skabe ballade.
              address: employee.address,
              email: employee.email,
              firstname: employee.firstname,
              lastname: employee.lastname,
              housenumber: employee.housenumber,
              phone: employee.phone,
              password: employee.password,
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
        let employeeInfo: UserInfo = {
            id: uid,
            email: email,
            password: password,
            address: '',
            firstname: '',
            lastname: '',
            housenumber: '',
            phone: '',
        };

        //Kontoen som er lavet i Authentication bliver automatisk oprettet i firestore.
        const employeeValue = [employeeInfo];
        let num = createAllEmployees(employeeValue);
        //Her kaldes fejlbesked fra Enum;
        let message = EnumMessages(await num);

        console.log('An Employee has been created successfully with an email', email, message);
        return 1;
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

