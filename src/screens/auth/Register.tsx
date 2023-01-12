import React from 'react';
//import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useMutation } from "react-query";

import { googleLoginOrRegister } from '../../services/UserServices';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { User } from '../../models/User';
import { useNavigation } from '@react-navigation/native';
//import { useQueryClient } from "react-query";
//import * as SecureStore from "expo-secure-store";


WebBrowser.maybeCompleteAuthSession();

const Register = () => {
  //const queryClient = useQueryClient();

  const navigation = useNavigation();
  // const login = (user: User) => {
  //   let stringUser = JSON.stringify(user);
  //   setUser(user);
  //   SecureStore.setItemAsync("user", stringUser);
  //   queryClient.refetchQueries();
  // };


  // const [_, __, googlePromptAsync] = Google.useAuthRequest({
  //   expoClientId:
  //     "659522102571-glg9th1ouvupfkhfn1fakvrba9dt2a0m.apps.googleusercontent.com",
  //   iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  //   androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  //   webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  // });

  // const googleRegister = useMutation(async () => {
  //   const response = await googlePromptAsync();
  //   if (response.type === "success") {
  //     const { access_token } = response.params;

  //     const user = await googleLoginOrRegister(access_token);
  //     if (user) {
  //       //login(user);
  //       console.log("login google")
  //       //navigation.goBack();
  //     }
  //   }
  // });
  
  
  
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
       "805894392235-4eb9aju1e70u3oi16f56250j36l6fanp.apps.googleusercontent.com",
    clientId: "659522102571-glg9th1ouvupfkhfn1fakvrba9dt2a0m.apps.googleusercontent.com",
    iosClientId: "your cliend id goes here!",
    androidClientId: "your cliend id goes here!"
  });

  React.useEffect(() => {
    if(response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }  

  return (
    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null &&
          <>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please Sign Up with Google</Text>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
            }} 
        >
          <Image source={require("./btn.png")} style={{width: 300, height: 40}} />
        </TouchableOpacity>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;

