import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RecipeItem from "../components/RecepieItem";

export default function TabOneScreen() {
  // Przykładowe dane o przepisach
  const [recipes, setRecipes] = useState([
    {
      title: "Spaghetti Bolognese",
      ingredients: ["makaron", "mięso mielone", "pomidor", "cebula", "czosnek"],
    },
    {
      title: "Sałatka Cezar",
      ingredients: [
        "sałata rzymska",
        "parmezan",
        "kurczak",
        "croutony",
        "sos Caesar",
      ],
    },
    // Możesz dodać więcej przepisów lub pobierać je dynamicznie z API
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Przepisy</Text>
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
