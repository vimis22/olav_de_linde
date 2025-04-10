import firestore from '@react-native-firebase/firestore';
import {RoleInfo} from './RoleInfo.ts';

export const updateRole = async (roleInfo: RoleInfo) => {
    try {
        const {id, ...updatedData} = roleInfo;
        const docRef = firestore().collection('Role').doc(id);
        const doc = await docRef.get();

        if (!doc.exists){
            console.log('System is not able to recongize roles');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.error('An Error occurred while updating roles', error);
        return -1;
    }
};
