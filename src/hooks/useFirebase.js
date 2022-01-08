import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  updateProfile,
  getIdToken,
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
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
      setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to database
            saveUserToDatabase(email, name);
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

    // observer user

    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                  setToken(idToken);
                })
            }
            else{
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[]);

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email]);

    const logout = () => {
      setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(()=> setLoading(false));
    }

    const saveUserToDatabase = (email, displayName) => {
      const user = {email, displayName};
      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        admin,
        token,
        loading,
        registerUser,
        error,
        loginUser,
        logout,
    }
}

export default useFirebase;