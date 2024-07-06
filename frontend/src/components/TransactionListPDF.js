import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

// Define styles directly as JavaScript objects
const styles = {
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
};

const TransactionListPDF = ({ transactions }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Transaction List</Text>
      {transactions.map((transaction) => (
        <View key={transaction._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Tno:</Text>
            <Text style={styles.value}>{transaction.tno}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Quantity:</Text>
            <Text style={styles.value}>{transaction.quantity}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>{transaction.description}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
); 

export default TransactionListPDF;



