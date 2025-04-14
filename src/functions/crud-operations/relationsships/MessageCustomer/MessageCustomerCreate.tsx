import firestore from '@react-native-firebase/firestore';
import {MessageCustomerInfo} from './MessageCustomerInfo.ts';
export const createMessageCustomer = async (allMessageCustomerInfo: MessageCustomerInfo) => {
    try {
        const checkMessageCustomerExistance = await firestore()
            .collection('MessageCustomer')
            .where('id','==',allMessageCustomerInfo.id)
            .where('Chat_Id','==',allMessageCustomerInfo.Chat_Id)
            .where('Customer_Id','==',allMessageCustomerInfo.Customer_Id)
            .where('Message','==',allMessageCustomerInfo.Message)
            .where('Timestamp','==',allMessageCustomerInfo.Timestamp)
            .get();

        if (!checkMessageCustomerExistance) {
            console.log('System has successfully found a MessageCustomer Relation');
            return 1;
        }

        await firestore()
            .collection('MessageCustomer')
            .add({id: allMessageCustomerInfo.id, Chat_Id: allMessageCustomerInfo.Chat_Id, Customer_Id: allMessageCustomerInfo.Customer_Id,
            Message: allMessageCustomerInfo.Message, Timestamp: allMessageCustomerInfo.Timestamp});

    } catch (error) {
        console.error('An Error occurred when finding MessageCustomer', error);
        return -1;
    }
};
