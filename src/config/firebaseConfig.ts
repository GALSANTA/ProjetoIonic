import * as firebase from 'firebase';
import {firebaseConfig} from '../utils/.env.local'

firebase.default.initializeApp(firebaseConfig);

async function logInUser(email:string, password:string) {
    
    try {
        return await firebase.default.auth().signInWithEmailAndPassword(email, password); 
    } catch (error) {
        console.log(error);
    }
}

async function registerUser(email:string, password:string) {
    try {
        await firebase.default.auth().createUserWithEmailAndPassword(email, password);
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getUser() {
    return new Promise((resolve, rejected) => {
        const unsubstribe = firebase.default.auth().onAuthStateChanged(function(user) {
            if (user) {
                resolve(user);
            } else {
                resolve(null);
            }
            unsubstribe();
        });
    });
}
async function deleteAccount() {
    
    try {
        await firebase.default.auth().currentUser?.delete()
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    }
}
async function signOut() {    
    try {
        await firebase.default.auth().signOut();
    } catch (error) {
        console.log(error);
    }
}


export {
    logInUser,
    registerUser,
    getUser,
    signOut,
    deleteAccount
}