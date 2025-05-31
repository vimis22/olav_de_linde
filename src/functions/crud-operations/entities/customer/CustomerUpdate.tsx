import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';
import {EnumMessages} from '../../EnumMessages.ts';

/**
 * Updates the current user's password in the Firestore database.'
 * @param password - The new password to be updated.
 * @returns Promises a result based on Error, which is either SUCCESS or FAILED during execution.
 */
export async function updateCustomerPassword(password: string) {
  const user = await auth().currentUser;
  if (user) {
    try {
      await user.updatePassword(password);
      console.log('Password has been updated');
    } catch (error) {
      console.log('An unexpected error occured during password update', error);
      throw error;
    }
  } else {
    console.log('A User is not logged in');
    throw new Error('User not logged in');
  }
}

/**
 * Sends a password reset email to the specified email address.
 * @param email - The email address to send the password reset email to.
 * @returns Promises a result based on Error, which is either SUCCESS or FAILED during execution.
 */
export const resetCustomerPassword = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    console.log('Reset link has been sent to: ', email);
  } catch (error) {
    console.log('An Error occurred while sending the email', error);
    throw error;
  }
};

/**
 * Updates the current user's information in the Firestore database.'
 * @param customerInfo - The new information to be updated.
 * @returns Promises a result based on Error, which is either SUCCESS or FAILED during execution.
 */
export const updateCustomer = async (customerInfo: UserInfo): Promise<string | UserInfo> => {
    try {
        const {id, ...updatedData} = customerInfo;
        const docRef = firestore().collection('Customer').doc(id);
        const doc = await docRef.get();

        if (doc.exists){
            console.log('Updating customer information');
            await docRef.update(updatedData);
            return updatedData as UserInfo;
        } else {
            console.log('System cannot recognize customer information');
            return EnumMessages(-1); // FAILED
        }
    } catch (error) {
        console.error('An Error occurred while updating the customer', error);
        return EnumMessages(-1); // FAILED
    }
};

export const updateEmailForCustomer = async (customerId: string, newEmail: string): Promise<string> => {
    try {
        const docRef = firestore().collection('Customer').doc(customerId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + customerId);
            return EnumMessages(0);
        }

        await docRef.update({Email: newEmail});
        console.log('System has updated the ' + customerId + ' with: ' + newEmail);
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return EnumMessages(-1);
    }
};

export const updateEmailForCustomerByEmail = async (oldEmail: string, newEmail: string): Promise<string> => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',oldEmail)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the email: ' + newEmail);
            return EnumMessages(-2);
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Email: newEmail});
        console.log('System has updated email from: :' + oldEmail + ' to' + newEmail);
        return EnumMessages(1);
    } catch (error) {
        console.log('An Error occurred while updating the email by an old email ', error);
        return EnumMessages(-1);
    }
};

export const updatePasswordForCustomer = async (customerId: string, password: string): Promise<string> => {
    try {
        const docRef = firestore().collection('Customer').doc(customerId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log(`Non Customer has been found with ID: ${customerId}`);
            return EnumMessages(-2);
        }

        await docRef.update({Password: password});
        console.log('System has updated the: ' + customerId + 'with ' + password);
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error has occured while updating by ID', error);
        return EnumMessages(-1);
    }
};

export const updatePasswordForCustomerByEmail = async (password: string, email: string): Promise<string> => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',email)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the email: ' + email);
            return EnumMessages(-2);
        }
        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Password: password});

        console.log('Sucesss has been made in updating their Password by Email');
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error has occured while updating the Telephone Number', error);
        return EnumMessages(-1);
    }
};


export const updateAddressForCustomer = async (customerInfo: UserInfo): Promise<string> => {
    try {
        const docRef = firestore().collection('Customer').doc(customerInfo.id);
        const doc = await docRef.get();

        if (!doc.exists){
            console.log('The Customer has not been found');
            return EnumMessages(-2);
        }

        await docRef.update({
            Address: customerInfo.address,
            Housenumber: customerInfo.housenumber,
        });

        return EnumMessages(1);
    } catch (error) {
        console.log('An Error occured while updating the address', error);
        return EnumMessages(-1);
    }
};

export const updateAddressForCustomerByEmail = async (customerInfo: UserInfo): Promise<string> => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email', '==', customerInfo.email)
            .get();

        if (snapShot.empty){
            console.log('The address of Customer has not been found');
            return EnumMessages(-2);
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.update({
          Address: customerInfo.address,
          Housenumber: customerInfo.housenumber,
        });

        console.log('System has succesfully updated the email: ', customerInfo.email);
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error occured while updating the address by Email', error);
        return EnumMessages(-1);
    }
};

export const updatePhoneNumberForCustomer = async (customerInfo: UserInfo): Promise<string> => {
    try {
        const docRef = firestore().collection('Customer').doc(customerInfo.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System could not find the user');
            return EnumMessages(-2);
        }

        await docRef.update({
            Phone: customerInfo.phone,
        });

        console.log('System was succesful in updating the users telehphone number', customerInfo.id);
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error occured while updating the Telephone Number', customerInfo.id);
        return EnumMessages(-1);
    }
};

export const updatePhoneNumberForCustomerByEmail = async (customerInfo: UserInfo): Promise<string> => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',customerInfo.email)
            .get();

        if(snapShot.empty) {
            console.log('No customer found with email:', customerInfo.email);
            return EnumMessages(-2);
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.update({
            Phone: customerInfo.phone,
        });

        console.log('System has updated the customer\'s phone number, by this email' , customerInfo.email);
        return EnumMessages(1);
    } catch(error) {
        console.error('An Error occured while updating the phone number through email', error);
        return EnumMessages(-1);
    }
};
