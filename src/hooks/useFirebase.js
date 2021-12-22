import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

// initialization firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password) => {
      setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
          })
          .catch((error) => {
            setError(error.message);
          }).finally(()=> setLoading(false));
    }

    const loginUser = (email, password) => {
      setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError('');
          })
          .catch((error) => {
            setError(error.message)
          }).finally(()=> setLoading(false));
    }


    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[])

    const logout = () => {
      setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(()=> setLoading(false));
    }

    return{
        user,
        loading,
        registerUser,
        error,
        loginUser,
        logout,
    }
}

export default useFirebase;