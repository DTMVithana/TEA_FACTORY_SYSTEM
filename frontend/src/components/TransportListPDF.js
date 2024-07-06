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

const TransportListPDF = ({ transports }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Trasport Details List</Text>
      {transports.map((transport) => (
        <View key={transport._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Transport Id:</Text>
            <Text style={styles.value}>{transport.TransportId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Vehicle Regitration No:</Text>
            <Text style={styles.value}>{transport.vehicleRegNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{transport.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Driver Name:</Text>
            <Text style={styles.value}>{transport.driverName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}> Discription:</Text>
            <Text style={styles.value}>{transport. discription}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.value}>{transport.status}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default TransportListPDF;
