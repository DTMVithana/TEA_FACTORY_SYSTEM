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

const LeaveListPDF = ({ leaves }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Leave List</Text>
      {leaves.map((leave) => (
        <View key={leave._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>LeaveNo:</Text>
            <Text style={styles.value}>{leave.leaveNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>LeaveStatus:</Text>
            <Text style={styles.value}>{leave.leaveStatus}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>{leave.description}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default LeaveListPDF;
