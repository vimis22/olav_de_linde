import firestore from '@react-native-firebase/firestore';
import {MessageEmployeeInfo} from './MessageEmployeeInfo.ts';

export const createMessageEmployee = async (allMessageEmployeeInfo: MessageEmployeeInfo) => {
    try {
        const checkMessageEmployeeExistance = await firestore()
            .collection('MessageEmployee')
            .where('id','==', allMessageEmployeeInfo.id)
            .where('Chat_Id','==',allMessageEmployeeInfo.Chat_Id)
            .where('Customer_Id','==',allMessageEmployeeInfo.Employee_Id)
            .where('Message','==',allMessageEmployeeInfo.Message)
            .where('Timestamp','==',allMessageEmployeeInfo.Timestamp)
            .get();

        if (!checkMessageEmployeeExistance) {
            console.log('System has successfully found a MessageCustomer Relation');
            return 1;
        }

        await firestore()
            .collection('MessageCustomer')
            .add({id: allMessageEmployeeInfo.id, Chat_Id: allMessageEmployeeInfo.Chat_Id, Employee_Id: allMessageEmployeeInfo.Employee_Id,
                Message: allMessageEmployeeInfo.Message, Timestamp: allMessageEmployeeInfo.Timestamp});

    } catch (error) {
        console.error('An Error occurred when finding MessageCustomer', error);
        return -1;
    }
};
