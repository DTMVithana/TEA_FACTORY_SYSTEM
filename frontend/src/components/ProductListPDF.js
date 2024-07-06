import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    width: 200,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
  },
});

const ProductListPDF = ({ products }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Product List</Text>
      {products.map((product) => (
        <View key={product._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Batch No:</Text>
            <Text style={styles.value}>{product.batchNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Category No:</Text>
            <Text style={styles.value}>{product.categoryNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Manufactured Date:</Text>
            <Text style={styles.value}>{product.MDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Quantity:</Text>
            <Text style={styles.value}>{product.qty}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default ProductListPDF;
