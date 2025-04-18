import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';

export const updateCustomer = async (customerInfo: UserInfo) => {
    try {
        const {id, ...updatedData} = customerInfo;
        const docRef = firestore().collection('Customer').doc(id);
        const doc = await docRef.get();

        if (!doc.exists){
            console.log('System cannot recognize customer information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.error('An Error occurred while updating the customer', error);
        return -1;
    }
};

export const updateEmailForCustomer = async (customerId: string, newEmail: string) => {
    try {
        //Kan man overveje at tage ting som er i fælleskab og smide den over i en metode.
        const docRef = firestore().collection('Customer').doc(customerId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + customerId);
            return 1;
        }

        await docRef.update({Email: newEmail});
        console.log('System has updated the ' + customerId + ' with: ' + newEmail);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateEmailForCustomerByEmail = async (oldEmail: string, newEmail: string) => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',oldEmail)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the email: ' + newEmail);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Email: newEmail});
        console.log('System has updated email from: :' + oldEmail + ' to' + newEmail);
    } catch (error) {
        console.log('An Error occurred while updating the email by an old email ', error);
        return -1;
    }
};

export const updatePasswordForCustomer = async (employeeId: string, password: string) => {
    try {
        const docRef = firestore().collection('Customer').doc(employeeId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ${employeeId}`');
            return;
        }

        await docRef.update({Password: password});
        console.log('System has updated the: ' + employeeId + 'with ' + password);
    } catch (error) {
        console.error('An Error has occured while updating by ID', error);
        return -1;
    }
};

export const updatePasswordForCustomerByEmail = async (password: string, email: string) => {
    try {
        //Husk, at de områder hvor der står byEmail skal kopiere følgende sætning.
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',email)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the email: ' + email);
            return -2;
        }
        const docRef = snapShot.docs[0].ref;
        //Husk, at denne sætning fortæller hvad vi ønsker at opdatere og ændre.
        await docRef.update({ Password: password});

        console.log('Sucesss has been made in updating their Password by Email');
        return 1;
    } catch (error) {
        console.error('An Error has occured while updating the Telephone Number', error);
        return -1;
    }
};


export const updateAddressForCustomer = async (customerInfo: UserInfo) => {
    try {
        const docRef = firestore().collection('Customer').doc(customerInfo.id);
        const doc = await docRef.get();

        if (!doc.exists){
            return console.log('The Customer has not been found');
        }

        await docRef.update({
            Streetname: customerInfo.streetname,
            Housenumber: customerInfo.housenumber,
            City: customerInfo.city,
            Zipcode: customerInfo.zipcode,
            Country: customerInfo.country,
        });

        return customerInfo.id;
    } catch (error) {
        console.log('An Error occured while updating the address', error);
        return -1;
    }
};

export const updateAddressForCustomerByEmail = async (customerInfo: UserInfo) => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email', '==', customerInfo.email)
            .get();

        if (snapShot.empty){
            console.log('The address of Employee has not been found');
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.update({
            Streetname: customerInfo.streetname,
            Housenumber: customerInfo.housenumber,
            City: customerInfo.city,
            Zipcode: customerInfo.zipcode,
            Country: customerInfo.country,
        });

        console.log('System has succesfully updated the email: ', customerInfo.email);
        return 1;
    } catch (error) {
        console.error('An Error occured while updating the address by Email', error);
        return -1;
    }
};

export const updatePhoneNumberForCustomer = async (customerInfo: UserInfo) => {
    try {
        const docRef = firestore().collection('Customer').doc(customerInfo.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System could not find the user');
        }

        await docRef.update({
            Countrycode: customerInfo.countrycode,
            Phone: customerInfo.phone,
        });

        console.log('System was succesful in updating the users telehphone number', customerInfo.id);
        return 1;
    } catch (error) {
        console.error('An Error occured while updating the Telephone Number', customerInfo.id);
    }
};

export const updatePhoneNumberForCustomerByEmail = async (customerInfo: UserInfo) => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',customerInfo.email)
            .get();

        if(snapShot.empty) {
            const docRef = snapShot.docs[0].ref;

            await docRef.update({
                Countrycode: customerInfo.countrycode,
                Phone: customerInfo.phone,
            });

            console.log('System has updated the employees phone number, by this email' , customerInfo.email);
            return 1;
        }
    } catch(error) {
        console.error('An Error occured while updating the phone number through email', error);
    };
};


