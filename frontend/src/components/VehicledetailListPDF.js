import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for PDF document
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

const VehicledetailListPDF  = ({ VEHICLED }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Vehicledetail List</Text>
      {VEHICLED.map((VEHICLED) => (
        <View key={VEHICLED._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>transportId:</Text>
            <Text style={styles.value}>{VEHICLED.transportId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>date:</Text>
            <Text style={styles.value}>{VEHICLED.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}> vehiceType:</Text>
            <Text style={styles.value}>{VEHICLED. vehicleType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Brand:</Text>
            <Text style={styles.value}>{VEHICLED.vehicleBrand}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}> Mileage:</Text>
            <Text style={styles.value}>{VEHICLED. mileage}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default VehicledetailListPDF;
