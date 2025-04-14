import firestore from '@react-native-firebase/firestore';
import {EmployeeLogInfo} from './EmployeeLogInfo.ts';

export const createCustomerLog = async (allEmployeeLogInfo: EmployeeLogInfo) => {
    try {
        const checkEmployeeLogExistance = await firestore()
            .collection('EmployeeLog')
            .where('id','==',allEmployeeLogInfo.id)
            .where('Case_Id','==',allEmployeeLogInfo.Employee_Id)
            .where('Property_Id','==',allEmployeeLogInfo.Log_Id)
            .get();

        if (!checkEmployeeLogExistance.empty) {
            console.log('System has successfully found a EmployeeLog Relation');
            return 1;
        }

        await firestore()
            .collection('EmployeeLog')
            .add({id: allEmployeeLogInfo.id, Employee_Id: allEmployeeLogInfo.Employee_Id, Log_Id: allEmployeeLogInfo.Log_Id});

    } catch (error) {
        console.error('An Error occurred when finding EmployeeLog ', error);
        return -1;
    }
};
