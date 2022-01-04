import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  updateProfile,
  signOut 
}
 from "firebase/auth";
import { useEffect } from "react";

// initialization firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
      setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(()=>{
            }).catch((error) => {});
            history.replace('/');
          })
          .catch((error) => {
            setError(error.message);
          }).finally(()=> setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
      setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const target = location?.state?.from || '/';
          history.replace(target);
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