import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const minValue = parseInt(min, 10);
    const maxValue = parseInt(max, 10);

    if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
      const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      setRandomNumber(random);
    } else {
      setRandomNumber(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Números Aleatórios</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor mínimo"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor máximo"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />

      <Button title="Gerar Número" onPress={generateRandomNumber} />

      {randomNumber !== null && (
        <Text style={styles.result}>Número gerado: {randomNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  result: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "green",
  },
});
