import firestore from '@react-native-firebase/firestore';
import {CasePropertyInfo} from './CasePropertyInfo.ts';

export const createCasePropertyList = async (allCasePropertyListInfo: CasePropertyInfo) => {
    try {
        const checkCasePropertyExistance = await firestore()
            .collection('CaseProperty')
            .where('id','==',allCasePropertyListInfo.id)
            .where('Case_Id','==',allCasePropertyListInfo.Case_Id)
            .where('Property_Id','==',allCasePropertyListInfo.Property_Id)
            .get();

        if (!checkCasePropertyExistance.empty) {
            console.log('System has successfully found a CaseProperty Relation');
            return 1;
        }

        await firestore()
            .collection('CaseProperty')
            .add({id: allCasePropertyListInfo.id, Case_Id: allCasePropertyListInfo.Case_Id, Property_Id: allCasePropertyListInfo.Property_Id});

    } catch (error) {
        console.error('An Error occurred when finding CaseProperty ', error);
        return -1;
    }
};
