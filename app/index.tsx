import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/taxical");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.displaycontainer}>
        <Image
          source={require("@/assets/images/taxicartoon.png")}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={[styles.txt, { fontSize: 30, color: "#444242" }]}>
          TAXI METER
        </Text>
        <Text style={[styles.txt, { fontSize: 14, color: "#39da54" }]}>
          THAI FARE CALCULATOR
        </Text>
        <ActivityIndicator
          size="large"
          style={styles.spinner}
        ></ActivityIndicator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#facd28",
  },

  displaycontainer: {
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f05b",
    borderRadius: 8,
  },

  txt: {
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: "Kanit_700Bold",
  },

  img: {
    width: "50%",
    height: "30%",
  },

  spinner: {
    color: "#39da54",
    marginTop: 50,
  },
});
