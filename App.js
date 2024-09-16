import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import MealTable from "./MealTable";
import { fetchRecipes } from "./Api";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Async
  const handleFetch = () => {
    setLoading(true); // Set loading state to true before fetch
    setRecipes([]);

    fetchRecipes(keyword)
      .then((data) => setRecipes(data.meals))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // Set loading state to false
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.text}
          placeholder="Ingredient..."
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
        />
        <Button title="FIND" onPress={handleFetch} />
      </View>

      {/* Display ActivityIndicator when loading is true */}
      {loading && <ActivityIndicator size="large" />}

      <MealTable recipes={recipes}></MealTable>
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
  searchContainer: { width: 200, marginTop: 100, marginBottom: 20 },
  text: { fontSize: 18 },
  image: { width: 60, height: 60, marginBottom: 5 },
  separator: {
    height: 1,
    width: "80%",
    backgroundColor: "#CED0CE",
    marginLeft: "10%",
  },
});
