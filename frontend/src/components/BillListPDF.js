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

const BillListPDF = ({ bills }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Bill Payment List</Text>
      {bills.map((bill) => (
        <View key={bill._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Payment ID:</Text>
            <Text style={styles.value}>{bill.payId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Bill No:</Text>
            <Text style={styles.value}>{bill.billNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount:</Text>
            <Text style={styles.value}>{bill.amount}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default BillListPDF;
