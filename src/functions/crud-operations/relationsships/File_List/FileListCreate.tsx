import firestore from '@react-native-firebase/firestore';
import {FileListInfo} from './FileListInfo.ts';

export const createFileList = async (allFileListInfo: FileListInfo) => {
    try {
        const checkFileListExistance = await firestore()
            .collection('File_List')
            .where('id','==',allFileListInfo.id)
            .where('Case_Id','==',allFileListInfo.Case_Id)
            .where('File_Id','==',allFileListInfo.File_Id)
            .get();

        if (!checkFileListExistance) {
            console.log('System has successfully found a FileList Relation');
            return 1;
        }

        await firestore()
            .collection('File_List')
            .add({id: allFileListInfo.id, Case_Id: allFileListInfo.Case_Id, File_Id: allFileListInfo.File_Id});

    } catch (error) {
        console.error('An Error occurred when finding File_List', error);
        return -1;
    }
};
