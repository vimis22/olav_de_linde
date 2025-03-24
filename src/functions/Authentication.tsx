import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {useId} from 'react';

/*
@link https://www.youtube.com/watch?v=wiYqhVyTBSA
 */
export const signUp = (fullname, email, password) => {
    if (!fullname || !email || !password){
        Alert.alert('Enter data')
    } else {
        return auth()
          .createUserWithEmailAndPassword(email.trim(), password)
          .then(cred => {
            auth().currentUser.updateProfile({
              displayName: fullname,
            });
            return useId();
          })
          .catch(err => Alert.alert(err.code, err.message));
    }
}

export const signIn = (email, password) => {
    if (!email || !password) {
        return auth().signInWithEmailAndPassword(email.trim(),password)
        .then(() => {
            console.log(auth().currentUser.useId);
        })
            .catch(
                err => Alert.alert(err.code, err.message)
            )
    }
}
