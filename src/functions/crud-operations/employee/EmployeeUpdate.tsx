import React from 'react';
import firestore from 'react-native-firebase/firestore';
import {EmployeeInfo} from './EmployeeInfo.ts';

export const updateEmployee = async (employeeInfo: EmployeeInfo) => {
    try {
        const {id, ...updatedData} = employeeInfo;
        const docRef = firestore().collection('Employee').doc(id);
        const doc = await docRef.get();

        if (!doc.exists){
            console.log('System cannot recognize employee information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.error('An Error occured while updating the employee', error);
        return -1;
    }
};

export const updateEmailForEmployee = async (employeeId: string, newEmail: string) => {
    try {
        //Kan man overveje at tage ting som er i fælleskab og smide den over i en metode.
        const docRef = firestore().collection('Employee').doc(employeeId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Employee has been found with ID: ' + employeeId);
            return 1;
        }

        await docRef.update({Email: newEmail});
        console.log('System has updated the ${employeeId} with: ' + newEmail);
    } catch (error) {
        console.error('An Error has occured while updating by ID', error);
        return -1;
    }
};

export const updateEmailForEmployeeByEmail = async (oldEmail: string, newEmail: string) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',oldEmail)
            .get();

        if (snapShot.empty()) {
            console.log('No Employee has been found with the email: ' + newEmail);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Email: newEmail});
        console.log('System has updated email from: :' + oldEmail + ' to' + newEmail);
    } catch (error) {
        console.log('An Error occured while updating the email by an old email ', error);
        return -1;
    }
};

export const updatePasswordForEmployee = async (employeeId: string, password: string) => {
    try {
        const docRef = firestore().collection('Employee').doc(employeeId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Employee has been found with ID: ${employeeId}`');
            return;
        }

        await docRef.update({Password: password});
        console.log('System has updated the: ' + employeeId + 'with ' + password);
    } catch (error) {
        console.error('An Error has occured while updating by ID', error);
        return -1;
    }
};

export const updatePasswordForEmployeeByEmail = async (password: string, email: string) => {
    try {
        //Husk, at de områder hvor der står byEmail skal kopiere følgende sætning.
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',email)
            .get();

        if (snapShot.empty()) {
            console.log('No Employee has been found with the email: ' + email);
            return -2;
        }
        const docRef = snapShot.docs[0].ref;
        //Husk, at denne sætning fortæller hvad vi ønsker at opdatere og ændre.
        await docRef.update({ Password: password});

        return console.log('Sucesss has been made in updating their Password by Email');
    } catch (error) {
        console.error('An Error has occured while updating the Telephone Number', error);
        return -1;
    }
};


export const updateAddressForEmployee = async (employeeInfo: EmployeeInfo) => {
    try {
        const docRef = firestore().collection('Employee').doc(employeeInfo.id);
        const doc = await docRef.get();

        if(!doc.exists){
            return console.log('The Employee has not been found');
        }

        await docRef.update({
            Streetname: employeeInfo.streetname,
            Housenumber: employeeInfo.housenumber,
            City: employeeInfo.city,
            Zipcode: employeeInfo.zipcode,
            Country: employeeInfo.country,
        });

        return employeeInfo.id;
    } catch (error) {
        console.log('An Error occured while updating the address', error);
        return -1;
    }
};

export const updateAddressForEmployeeByEmail = async (employeeInfo: EmployeeInfo) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email', '==', employeeInfo.email)
            .get();

        if (snapShot.empty()){
            console.log('The address of Employee has not been found');
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.update({
            Streetname: employeeInfo.streetname,
            Housenumber: employeeInfo.housenumber,
            City: employeeInfo.city,
            Zipcode: employeeInfo.zipcode,
            Country: employeeInfo.country,
        });

        return console.log('System has succesfully updated the email: ', employeeInfo.email);
    } catch (error) {
        console.error('An Error occured while updating the address by Email', error);
        return -1;
    }
};

export const updatePhoneNumberForEmployee = async (employeeInfo: EmployeeInfo) => {
    try {
        const docRef = firestore().collection('Employee').doc(employeeInfo.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System could not find the user');
        }

        await docRef.update({
            Countrycode: employeeInfo.countrycode,
            Phone: employeeInfo.phone,
        });

        return console.log('System was succesful in updating the users telehphone number', employeeInfo.id);
    } catch (error) {
        console.error('An Error occured while updating the Telephone Number', employeeInfo.id);
    }
};

export const updatePhoneNumberForEmployeeByEmail = async (employeeInfo: EmployeeInfo) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',employeeInfo.email)
            .get();

        if(snapShot.empty()) {
            const docRef = snapShot.docs[0].ref;

            await docRef.update({
                Countrycode: employeeInfo.countrycode,
                Phone: employeeInfo.phone,
            });

            return console.log('System has updated the employees phone number, by this email' , employeeInfo.email);
        }
    } catch(error) {
        console.error('An Error occured while updating the phone number through email', error);
    };
};


