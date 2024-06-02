import { View, Text, Image, StyleSheet } from "react-native";

const Category = ({ title, tasks, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tasks}>{tasks} Tasks</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    backgroundColor: "#ddd",
    marginRight: 20,
    padding:34,
    borderRadius: 10,
    alignItems: "center",
    elevation:4,
    justifyContent: "center",
  },
  title: {
    fontSize: 7,
    fontWeight: "bold",
    marginVertical: 8,
    marginBottom: 5,
  },
  tasks: {
    fontSize: 5,
    color: "#666",
    right:25,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});

export default Category;