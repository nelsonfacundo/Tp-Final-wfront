import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Constants from "../../lib/Constants.js";
import { useState } from "react/cjs/react.development";

// LOGIN CON GOOGLE
import * as Google from "expo-auth-session/providers/google";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function LoginScreen({ navigation }) {
  function login() {
    navigation.navigate(Constants.MAIN_VIEW);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //LOGIN CON GOOGLE
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "27396392572-bio472p3pmkg4b2icr7qnovq7rbaq5a3.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Autenticando data:", authentication);

      //llamar API de google para traerme info de usuario

      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("User data:", data);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PetCare</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#d1d1d1"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#d1d1d1"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signBtn} onPress={() => login()}>
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>

      {/*LOGIN CON GOOGLE*/}
      {
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync().then(() => login());
          }}
        >
          <MaterialCommunityIcons name="google" color={"#DB4437"} size={26} />
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    borderColor: "transparent",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
