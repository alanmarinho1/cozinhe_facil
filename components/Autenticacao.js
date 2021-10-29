import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {firebase} from '@react-native-firebase/auth';

export default function Autenticacao() {
  
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(user.email)
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
}

export function logoutFirebase({navigation}){
  return(
    firebase.auth()
          .signOut()
          .then(() => {
            console.log('Usuario desconectado')
            navigation.navigate('Entrar')
          })
  )
  
}

