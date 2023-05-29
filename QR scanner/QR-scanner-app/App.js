import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();

  const requestPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    requestPermission();

    return () => {
      setHasPermission(false);
      setScanData();
    };
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant permissions to app</Text>
        <Button title="allow" onPress={() => requestPermission()} />
        <StatusBar style="auto" />
      </View>
    );
  }

  const handledBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    postQRDetails(data);
  };

  const postQRDetails = async (data) => {
    console.log(`Data : ${data}`);
    await axios.post("http://192.168.8.102:8000/testPost", { data });
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handledBarCodeScanned}
      />
      {scanData && (
        <Button title="Scan Again ?" onPress={() => setScanData(undefined)} />
      )}
      <StatusBar style="auto" />
      <Button title="X" onPress={() => setHasPermission(false)} />
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
});
