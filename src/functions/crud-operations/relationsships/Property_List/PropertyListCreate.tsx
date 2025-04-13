import firestore from '@react-native-firebase/firestore';
import {PropertyListInfo} from './PropertyListInfo.ts';

export const createPropertyList = async (allPropertyListInfo: PropertyListInfo) => {
    try {
        const checkPropertyListExistance = await firestore()
            .collection('Property_List')
            .where('id','==', allPropertyListInfo.id)
            .where('Property_Id','==',allPropertyListInfo.Property_Id)
            .where('Customer_Id', '==', allPropertyListInfo.Customer_Id)
            .get();

        if (!checkPropertyListExistance.empty) {
            console.log('System has successfully found a PropertyList Relation');
            return 1;
        }

        await firestore()
            .collection('Property_List')
            .add({Id: allPropertyListInfo.id, Customer_Id: allPropertyListInfo.Customer_Id, Property_Id: allPropertyListInfo.Property_Id});

    } catch (error) {
        console.error('An Error occurred when finding the PropertyList ', error);
        return -1;
    }
};
