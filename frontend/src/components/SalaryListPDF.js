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

const SalaryListPDF = ({ salaries }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Salary Payment List</Text>
      {salaries.map((salary) => (
        <View key={salary._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Payment Id:</Text>
            <Text style={styles.value}>{salary.payId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Employee Id:</Text>
            <Text style={styles.value}>{salary.EId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Full Amount:</Text>
            <Text style={styles.value}>{salary.Famount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{salary.date}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default SalaryListPDF;
