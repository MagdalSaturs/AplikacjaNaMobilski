import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FavoriteRecipeItem from "../components/FavoriteRecepieItem";

export default function TabTwoScreen() {
  // Przykładowe dane o ulubionych przepisach
  const [favoriteRecipes, setFavoriteRecipes] = useState([
    {
      title: "Tarta jabłkowa",
      ingredients: ["jabłka", "cynamon", "ciasto kruche"],
    },
    {
      title: "Ratatouille",
      ingredients: ["bakłażan", "cukinia", "papryka", "pomidor", "cebula"],
    },
    // Możesz dodać więcej ulubionych przepisów lub pobierać je dynamicznie z lokalnej bazy danych
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ulubione przepisy</Text>
      {favoriteRecipes.map((recipe, index) => (
        <FavoriteRecipeItem key={index} recipe={recipe} />
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
