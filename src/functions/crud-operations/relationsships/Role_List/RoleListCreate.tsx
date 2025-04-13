import firestore from '@react-native-firebase/firestore';
import {PropertyListInfo} from './RoleListInfo.ts';

export const createRoleList = async (allRoleListInfo: PropertyListInfo) => {
    try {
        const checkPropertyListExistance = await firestore()
            .collection('Role_List')
            .where('id','==',allRoleListInfo.id)
            .where('Employee:Id','==',allRoleListInfo.Employee_Id)
            .where('Role_Id','==',allRoleListInfo.Role_Id)
            .get();

        if (!checkPropertyListExistance.empty) {
            console.log('System has succesfully found a RoleList Relation');
            return 1;
        }

        await firestore()
            .collection('Role_List')
            .add({id: allRoleListInfo.id, Employee_Id: allRoleListInfo.Employee_Id, Role_Id: allRoleListInfo.Role_Id});
    } catch (error) {
        console.error('An Error occurred when finding the RoleList ', error);
        return -1;
    }
}
