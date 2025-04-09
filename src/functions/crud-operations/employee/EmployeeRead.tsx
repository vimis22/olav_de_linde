import React from 'react';
import firestore from "react-native-firebase/firestore";

export const getEmployeeById = async (id) => {
    try{
        const doc = await firestore().collection('Employee').doc(id).get();
        if (doc.exits) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Employee does not exist');
            return null;
        }
    } catch (error) {
        console.log('System is not able to fetch Employee by Id', error);
    }
};

export const getAllEmployee = async () => {
   try{
       const snapshot = await firestore().collection('Employee').get();
       return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
   } catch (error) {
       console.log('System is not able fetch all Employees', error);
   }
};

export const getAllEmployeeByRole = async (role) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Role','==',role)
            .get();
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        console.error('System is not able fetch by Role', error);
    }
};

export const getAllEmployeeByFirstname = async (firstname) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Firstname','==',firstname)
            .get();
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        console.error('System is not able fetch by Firstname', error);
    }
};

export const getAllEmployeeByLastname = async (lastname) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Lastname','==',lastname)
            .get();
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        console.error('System is not able fetch by Lastname', error);
    }
};

export const getAllEmployeeByEmail = async (email) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Email','==',email)
            .get();
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        console.error('System is not able fetch by Email', error);
    }
};

