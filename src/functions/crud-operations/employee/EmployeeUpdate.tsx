import React from 'react';
import firestore from 'react-native-firebase/firestore';

export const updateEmployee = async (employeeObject) => {
    try {
        const {id, ...updatedData} = employeeObject;
        const docRef = firestore().collection('Employee').doc(id);
        const doc = await docRef.get();

        if (!doc.exists){
            console.log('System cannot recognize employee information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.error('An Error occured while updating the employee', error);
        return console.log('System has failed be updated');
    }
}
export const updateAllEmployees = async (updatedFields) {
    try {
        const snapshot = await firestore().collection('Employee').get();
        const batch = firestore().batch();

        snapshot.forEach((doc) => {
            batch.update(doc.ref, updatedFields);
        });

        await batch.commit();
        console.log('System has updated all employees');
    } catch (error) {
        console.error('System is updating alle employees', error);
    }
};

export const updateEmailForEmployee = async (employeeId, newEmail) => {
    try {
        const docRef = firestore().collection('Employee').doc(employeeId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Employee has been found with ID: ${employeeId}`');
            return;
        }

        await docRef.update({Email: newEmail});
        console.log('System has updated the ${employeeId} with ${newEmail}');
    } catch (error) {
        console.error('An Error has occured while updating by ID', error);
    }
};

export const updateEmailForEmployeeByEmail = async (oldEmail, newEmail) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',oldEmail)
            .get();

        if (snapShot.empty()) {
            console.log('No Employee has been found with the email: ${newEmail} ');
            return;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Email: newEmail});
        console.log('System has updated email from ${oldEmail} to ${newEmail}');
    } catch (error) {
        console.log('An Error occured while updating the email by an old email ', error);
    }
};

export const updatePasswordForEmployee = async (employeeId, newEmail) => {
    try {
        const docRef = firestore().collection('Employee').doc(employeeId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Employee has been found with ID: ${employeeId}`');
            return;
        }

        await docRef.update({Email: newEmail});
        console.log('System has updated the ${employeeId} with ${newEmail}');
    } catch (error) {
        console.error('An Error has occured while updating by ID', error);
    }
};

export const updatePasswordForEmployeeByEmail = async (password, email) => {
    try {
        await firestore()
            .collection('Employee')
            .doc(email)
            .update({
                Email: email,
                Password: password,
            });
        return console.log('Sucesss has been made in updating their Password by Email');
    } catch (error) {
        console.error('An Error has occured while updating the Telephone Number', error);
        console.log('Failed has happened in updating their Password by Email');
    }
};

export const updateAddressForEmployee = async (streetname, housenumber, city, zipcode, country, id) => {
    try {
        const docRef = firestore().collection('Employee').doc(id);
        const doc = await docRef.get();

        if(!doc.exists){
            return console.log('The Employee has not been found');
        }

        await docRef.update({
            Streetname: streetname,
            Housenumber: housenumber,
            City: city,
            Zipcode: zipcode,
            Country: country,
        });

        return id;
    } catch (error) {
        console.log('An Error occured while updating the address', error);
    }
};

export const updateAddressForEmployeeByEmail = async (streetname, housenumber, city, zipcode, country, email) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email', '==', email)
            .get();

        if (snapShot.empty()){
            console.log('The address of Employee has not been found');
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.update({
            Streetname: streetname,
            Housenumber: housenumber,
            City: city,
            Zipcode: zipcode,
            Country: country,
        });

        return console.log('System has succesfully updated the email: ', email);
    } catch (error) {
        console.error('An Error occured while updating the address by Email', error);
    }
};

export const updatePhoneNumberForEmployee = async (countrycode, phone_number, id) => {
    try {
        const docRef = firestore().collection('Employee').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System could not find the user');
        }

        await docRef.update({
            Countrycode: countrycode,
            Number: phone_number,
        });

        return console.log('System was succesful in updating the users telehphone number', id);
    } catch (error) {
        console.error('An Error occured while updating the Telephone Number', id);
    }
}

export const updatePhoneNumberForEmployeeByEmail = async (countrycode, phone_number, email) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',email)
            .get();

        if(snapShot.empty()) {
            const docRef = snapShot.docs[0].ref;

            await docRef.update({
                Countrycode: countrycode,
                Number: phone_number,
            });

            return console.log('System has updated the employees phone number, by this email' ,email);
        } catch (error) {
            console.error('An Error occured while updating the phone number through email', error);
        }
    }
};


