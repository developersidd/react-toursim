import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initFirebase from '../Firebase/FirebaseInit';
initFirebase();

const useFirebase = () => {
    // firebase data
    const [firebaseData, setFirebaseData] = useState({});
    const [firebaseErrors, setFirebaseErrors] = useState("");
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    // lest's Destructure signup or login data 
    const [sName, setSName] = useState("");
    const [sEmail, setSEmail] = useState("");
    const [sPass, setSPass] = useState("");

    // firebase settings
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // user observer
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            const userData = { displayName: user.displayName, email: user.email };
            if (user) {
                setFirebaseData(userData);
                getIdToken(user)
                    .then(idToken => localStorage.setItem("idToken", idToken));
            } else {
                setFirebaseData({});
                setLoading(false)
            }
        });
    }, []);

    // check admin Role
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/check_admin/${firebaseData.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("idToken")}`
            }
        })
            .then(res => {
                setIsAdmin(res.data.isAdmin);
                setLoading(false);
            }).catch(err => {

            });

    }, [firebaseData.email]);

    // Save user
    const saveUser = (name, email, method) => {
        const user = { name, email };
        fetch("http://localhost:5000/add_user", {
            headers: { 'Content-Type': 'application/json', },
            method: method,
            body: JSON.stringify(user)
        })
            .then(res => {
            }).catch((err) => {
                console.log("save user", err)
            });
    };

    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: sName,
        }).then(() => {

        }).finally(() => {
            setLoading(false);
        });
    }

    const registerUser = () => {
        return createUserWithEmailAndPassword(auth, sEmail, sPass);
    }

    const loginUser = (e) => {
        return signInWithEmailAndPassword(auth, sEmail, sPass)
    }

    // Google sign in 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(res => {
                setFirebaseData({});
                localStorage.removeItem("idToken");
            })
            .finally(() => {
                setLoading(false);
            });
    }




    return { googleSignIn, registerUser, firebaseErrors, setSEmail, setSName, setSPass, firebaseData, logOut, loginUser, setFirebaseErrors, setFirebaseData, setLoading, loading, updateUser, saveUser, isAdmin };
}

export default useFirebase;