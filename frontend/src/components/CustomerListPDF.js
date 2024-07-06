import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";


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

const CustomerListPDF = ({ customers }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Customer List</Text>
      {customers.map((customer) => (
        <View key={customer._id} style={styles.section}>
           <View style={styles.row}>
            <Text style={styles.label}>NIC:</Text>
            <Text style={styles.value}>{customer.nic}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{customer.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{customer.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone No:</Text>
            <Text style={styles.value}>{customer.phoneNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sales Assistant:</Text>
            <Text style={styles.value}>{customer.salesassistant}</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.label}>Registration Date:</Text>
          <Text style={styles.value}>{customer.registrationdate}</Text>
        </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default CustomerListPDF;
