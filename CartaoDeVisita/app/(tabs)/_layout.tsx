import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CartaoDeVisita = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Eduarda Veloso</Text>
      <Text style={styles.title}>Desenvolvedora Fullstack | Análise de Dados</Text>
      <Text style={styles.info}>📧 eduarda.veloso@email.com</Text>
      <Text style={styles.info}>📍 Recife, PE</Text>
      <Text style={styles.info}>🔗 github.com/eduardaveloso</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: "#777",
  },
});

export default CartaoDeVisita;
