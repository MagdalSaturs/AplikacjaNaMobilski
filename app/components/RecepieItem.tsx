import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeItem = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.ingredients}>{recipe.ingredients.join(", ")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ingredients: {
    fontSize: 16,
  },
});

export default RecipeItem;
