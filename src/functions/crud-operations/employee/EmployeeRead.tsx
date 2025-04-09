import React from 'react';
import firestore from "react-native-firebase/firestore";

export const getEmployeeById = async (id: string) => {
    try{
        const doc = await firestore().collection('Employee').doc(id).get();
        if (doc.exits) {
            //Dette her return er default.
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Employee does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Employee by Id', error);
        return {id: -2};
    }
};

export const getAllEmployee = async () => {
   try{
       const snapshot = await firestore().collection('Employee').get();
       return snapshot.docs.map((doc: {id: any; data: () => any}) => {
         return {id: doc.id, ...doc.data()};
       });
   } catch (error) {
       console.log('System is not able fetch all Employees', error);
       return {id: -2};
   }
};

export const getAllEmployeeByRole = async (role: string) => {
    try {
        const snapshot = await firestore()
            //Fetche id'en fra Employeen og derefter søge i relationstabellen og tag rolle-id'er som hænger sammen.
            .collection('Employee')
            .where('Role','==',role)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
          id: doc.id,
          ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Role', error);
        return {id: -2};
    }
};

export const getAllEmployeeByFirstname = async (firstname: string) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Firstname','==',firstname)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
          return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Firstname', error);
        return {id: -2};
    }
};

export const getAllEmployeeByLastname = async (lastname: string) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Lastname','==',lastname)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
          id: doc.id,
          ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Lastname', error);
        return {id: -2};
    }
};

export const getAllEmployeeByEmail = async (email: string) => {
    try {
        const snapshot = await firestore()
            .collection('Employee')
            .where('Email','==',email)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
          id: doc.id,
          ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Email', error);
        return {id: -2};
    }
};

