import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const[user, setUser] = useState({});
    const[isLoading, setIsloading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsloading(false));
    }

    // Observe User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false));
    }

    return {
        user,
        isLoading, 
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;