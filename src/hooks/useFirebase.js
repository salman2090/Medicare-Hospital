import { updateProfile, signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const[user, setUser] = useState({});
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const[isLoading, setIsloading] = useState(true);
    const [isLogin,setIsLogin]=useState(false);
    const [error,setError]=useState('');

    const auth = getAuth();

    // handle registration 
    const handleRegistration=e=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
          const user=result.user;
          console.log("This is user",user);
          setUserName();
          setError('Registration Successfull!')
          logOut();
        })
        
        e.preventDefault();  
    }

    const handleName=e=>{
        setName(e.target.value);
    }

    const setUserName=()=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{
    
        })
    }

    const handlgeEmailChange=e=>{
        setEmail(e.target.value);
    }

    const handlgePasswordChange=e=>{
        setPassword(e.target.value);
    
    }

    // handle Login
    const handleLogin=e=>{
        processLogin(email,password);
        e.preventDefault();

    }
    const processLogin=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
          const user=result.user;
          setIsLogin(true);
          console.log(user);
          setError('Login Successfull!')  
        })
      }
    
    //handle google sign in
    const signInUsingGoogle = () => {
        setIsloading(true);
        
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        
            .then(result => {
                setUser(result.user);
                setIsLogin(true);
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

    // handle logout
    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false));
    }

    return {
        user,
        isLoading,
        isLogin,
        error,
        handleName,
        handleRegistration,
        handleLogin,
        handlgeEmailChange,
        handlgePasswordChange,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;