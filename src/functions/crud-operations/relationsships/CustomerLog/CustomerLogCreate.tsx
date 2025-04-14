import firestore from '@react-native-firebase/firestore';
import {CustomerLogInfo} from './CustomerLogInfo.ts';

export const createCustomerLog = async (allCustomerLogInfo: CustomerLogInfo) => {
    try {
        const checkCustomerLogExistance = await firestore()
            .collection('CustomerLog')
            .where('id','==',allCustomerLogInfo.id)
            .where('Case_Id','==',allCustomerLogInfo.Customer_Id)
            .where('Property_Id','==',allCustomerLogInfo.Log_Id)
            .get();

        if (!checkCustomerLogExistance.empty) {
            console.log('System has successfully found a CustomerLog Relation');
            return 1;
        }

        await firestore()
            .collection('CustomerLog')
            .add({id: allCustomerLogInfo.id, Customer_Id: allCustomerLogInfo.Customer_Id, Log_Id: allCustomerLogInfo.Log_Id});

    } catch (error) {
        console.error('An Error occurred when finding CustomerLog ', error);
        return -1;
    }
};
