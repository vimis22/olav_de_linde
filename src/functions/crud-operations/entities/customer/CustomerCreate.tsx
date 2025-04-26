import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';
import {EnumMessages} from '../../EnumMessages.ts';
import {createAllEmployees} from '../employee/EmployeeCreate.tsx';

export const createAllCustomers = async (allCustomersInfo: UserInfo[]): Promise<number> => {
    try {
        if (!allCustomersInfo || allCustomersInfo.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCustomersInfo.forEach(customer => {
            const customerRef = firestore().collection('Customer').doc(customer.id);
            batch.set(customerRef, {
                address: customer.address,
                email: customer.email,
                firstname: customer.firstname,
                lastname: customer.lastname,
                housenumber: customer.housenumber,
                phone: customer.phone,
                password: customer.password,
                createAt: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occured in createCustomer', error);
        return -1;
    }
};

export const createEmployeeWithEmail = async (email: string, password: string) => {
    try {
        const credentials = await auth().createUserWithEmailAndPassword(email, password);
        const {uid} = credentials.user;
        let customerInfo: UserInfo = {
            id: uid,
            email: email,
            password: password,
            address: '',
            firstname: '',
            lastname: '',
            housenumber: '',
            phone: '',
        };

        const customerValue = [customerInfo];
        let num = createAllEmployees(customerValue);
        let message = EnumMessages(await num);

        console.log('An Customer has been created successfully with information', email, message);
        return 0;
    } catch (error) {
        console.error('An Error occured in createCustomerWithEmail:', error);
        return -1;
    }
};
