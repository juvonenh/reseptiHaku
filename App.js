import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
} from "react-native";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleFetch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Error in fetch: status code ${response.status} ${response.statusText}`
          );

        return response.json();
      })
      .then((data) => setRecipes(data.meals))
      .catch((err) => console.error(err));
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

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
          </View>
        )}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
      />
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
