import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const CreateProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.backGreen}></SafeAreaView>

      <Text style={styles.header}>Create Profile</Text>

      <TouchableOpacity style={styles.photoButton}>
        <Image
          style={styles.photoImage}
          source={require("../assets/add-photo.png")}
        />
      </TouchableOpacity>

      <Text style={styles.contact}>How can we contact you?</Text>

      <TextInput
        style={[styles.nameBox, { backgroundColor: "white" }]}
        placeholder="Enter your full name"
        placeholderTextColor="#000"
      />

      <TextInput
        style={[styles.phoneBox, { backgroundColor: "white" }]}
        placeholder="Enter your phone number"
        placeholderTextColor="#000"
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("CreateDogProfile")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.cancel}>Cancel</Text>
    </SafeAreaView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  header: {
    //  fontFamily: "poppins",
    fontSize: 50,
    fontWeight: "bold",
    position: "absolute",
    lineHeight: 75,
    marginTop: 103,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    width: 400,
    left: 5,
    flex: 1,
    // backgroundColor: "#B8DFA9",
  },
  backGreen: {
    alignItems: "center",
    width: 400,
    flex: 1,
    backgroundColor: "#B8DFA9",
  },
  contact: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    position: "absolute",
    width: 209,
    left: 24,
    top: 386,
  },
  nameBox: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    top: 442,
    paddingLeft: 15,
    left: 24,
    color: "#333",
  },
  phoneBox: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    top: 536,
    paddingLeft: 15,
    left: 24,
    color: "#333",
  },
  continueButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    width: 183,
    height: 48,
    top: 662,
    backgroundColor: "#323841",
    borderRadius: 30,
  },
  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancel: {
    position: "absolute",
    top: 734,
    fontSize: 16,
  },
  photoButton: {
    position: "absolute",
    top: 202,
    left: 124,
  },
});
