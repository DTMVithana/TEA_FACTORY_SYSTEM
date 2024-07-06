import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";


// Define styles directly as JavaScript objects
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    width: 120,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
  },
});

const CategoryListPDF = ({ categories }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Category List</Text>
      {categories.map((category) => (
        <View key={category._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Category No:</Text>
            <Text style={styles.value}>{category.categoryNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{category.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.value}>{category.ingredients}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default CategoryListPDF;
