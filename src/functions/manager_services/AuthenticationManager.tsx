// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
//
// export async function loginWithEmail(email: string, password: string){
//     try{
//         const credentials = await auth().signInWithEmailAndPassword(email, password);
//         const userId = credentials.user.uid;
//         const docRef = await firestore().collection('Customer').doc(userId).get();
//         const userInfoData = docRef.data();
//         console.log('Login with Email: ' + userInfoData + ' succeeded');
//         return credentials.user;
//     } catch (error: any){
//         console.log('An unexpected error occurred in Login with Firestore and Authentication', error);
//         throw error;
//     }
// }
//
// //mockdata -> signupWithEmail(mockEmail, mockPassword) -> await -> responce
//
// export async function signupWithEmail(email: string, password: string) {
//   try {
//     const credentials = await auth().createUserWithEmailAndPassword(email, password);
//     const userId = credentials.user.uid;
//     console.log('Creation of User: ' + credentials.user + ' succeeded with Firestore document');
//     return userId;
//   } catch (error: any) {
//     console.log('An unexpected error occurred during signup in firebase authentication', error);
//     throw error;
//   }
// };
//
// export const signupWithAllInformation = async (userId: string, name: string, email: string, password: string, confirmPassword: string,
//                                                        companyName: string, cvrNumber: string, address: string, houseNumber: string, phoneNumber: string) => {
//   console.log('The system is currently processing the following information ' + ':' + name, email, password,
//     companyName, cvrNumber, address, houseNumber, phoneNumber);
//   try {
//     if (!userId) {
//       console.log('A User is not logged in');
//     }
//
//     await firestore().collection('Customer').doc(userId).set({
//       name,
//       email,
//       password,
//       confirmPassword,
//       companyName,
//       cvrNumber,
//       address,
//       houseNumber,
//       phoneNumber,
//     });
//     console.log('The Document has the following ID: ', userId);
//   } catch (error) {
//     console.log('An Error occurred while adding the following ID: ', error);
//     throw error;
//   }
// };
//
// export const signupWithUser = async (name: string, email: string, password: string, confirmPassword: string,
//                                      companyName: string, cvrNumber: string, address: string, houseNumber: string, phoneNumber: string) => {
//   console.log('The system is currently processing the folllowing information ' + ':' + name, email, password, companyName, cvrNumber, address, houseNumber, phoneNumber);
//   try {
//     const userId = await signupWithEmail(email, password);
//     await signupWithAllInformation(userId, name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber);
//     console.log('The User has been created with the following Information: ' + userId, name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber);
//     return userId;
//   } catch (error) {
//     console.log('An Error occurred while creating the following User: ', error);
//     throw error;
//   }
// };
//
// export async function loggingout(){
//   try {
//     await auth().signOut();
//     console.log('User has been logged out');
//   } catch (error) {
//     console.log('An unexpected error occured during logout', error);
//     throw error;
//   }
// }
//
// export async function updateLoginWithCredentials(password: string){
//   const user = await auth().currentUser;
//   if (user) {
//     try {
//       await user.updatePassword(password);
//       console.log('Password has been updated');
//     } catch (error) {
//       console.log('An unexpected error occured during password update', error);
//     }
//   } else {
//     console.log('A User is not logged in');
//   }
// }
//
// export const resetPasswordWithEmail = async (email: string) => {
//   try {
//     await auth().sendPasswordResetEmail(email);
//     console.log('Reset link has been sent to: ', email);
//   } catch (error) {
//     console.log('An Error occurred while sending the email', error);
//     throw error;
//   }
// };
//
// export const deleteUser = async () => {
//   const user = await auth().currentUser;
//   if (user) {
//     try {
//       await user.delete();
//       console.log('Password has been deleted');
//     } catch (error) {
//       console.log('An unexpected error occured during account deletion', error);
//     }
//   } else {
//     console.log('A User has not logged in');
//   }
// };
//
// module.exports = {loginWithEmail, signupWithEmail, signupWithUser, logout: loggingout, updateLoginWithCredentials, resetPasswordWithEmail, deleteUser, signupWithAllInformation};
