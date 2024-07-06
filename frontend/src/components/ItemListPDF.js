import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for PDF document
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

const ItemListPDF = ({ items }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Item List</Text>
      {items.map((item) => (
        <View key={item._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{item.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Level:</Text>
            <Text style={styles.value}>{item.level}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Quantity:</Text>
            <Text style={styles.value}>{item.quantity}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default ItemListPDF;

