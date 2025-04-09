import React from 'react';
import firestore from 'react-native-firebase/firestore';

export const deleteEmployeeById = async (id) {
    try {
        const docRef = firestore().collection('Employee').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has deleted the employee by thge email', id);
        }

        await docRef.delete();
        return console.log('System has successfully deleted the employee by ID: ', error);
    } catch (error) {
        console.log('An Error occured while updating the employee by ID', error);
    }
};

export const deleteEmployeeByEmail = async (email) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',email)
            .get();

        if (snapShot.empty()){
            console.log('System is not able to find employee in the system');
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();

        return console.log('System has successfully deleted the employee by id: ', docId);
    } catch (error) {
        console.log('An Error occured while deleting the Employee by email', error);
    }
};

export const deleteEmployeeByRole = async (role) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Role','==',role)
            .get();

        if (snapShot.empty()){
            console.log('System as not able to find Employee by Role');
        }

        const batch = firestore().batch();
        snapShot.docs.forEach((doc) => {
            batch.delete(doc.ref);
        });

        await batch.commit;
        return console.log('System has successfully deleted the Employee Role');
    } catch (error) {
        console.log('An Error occurred while deleting the Employee Role ', error);
    }
};


