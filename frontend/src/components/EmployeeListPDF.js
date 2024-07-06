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

const EmployeeListPDF = ({ employees }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Employee List</Text>
      {employees.map((employee) => (
        <View key={employee._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{employee.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{employee.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone No:</Text>
            <Text style={styles.value}>{employee.phoneNumber}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default EmployeeListPDF;
