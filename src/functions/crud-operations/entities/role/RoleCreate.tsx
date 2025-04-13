import firestore from '@react-native-firebase/firestore';

export const createRole = async (name: string) => {
    try {
        const checkRoleExistance = await firestore()
            .collection('Role')
            .where('Name','==',name)
            .get();

        if (!checkRoleExistance.empty){
            console.log('System has successfully found an existing role');
        }

        await firestore()
            .collection('Role')
            .add({Name: name});

        return 1;
    } catch(error) {
        console.error('An Error when creating a new Role', error);
        return -1;
    }
};
