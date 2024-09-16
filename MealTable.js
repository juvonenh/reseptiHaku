import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export default function MealTable({ recipes }) {
  return (
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
