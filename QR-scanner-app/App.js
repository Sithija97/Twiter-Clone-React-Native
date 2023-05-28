import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();

  const requestPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant permissions to app</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const handledBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data : ${data}`);
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
