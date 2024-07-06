import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";


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

const OrderListPDF = ({ orders }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Order List</Text>
      {orders.map((order) => (
        <View key={order._id} style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Order ID:</Text>
            <Text style={styles.value}>{order.orderID}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Customer NIC:</Text>
            <Text style={styles.value}>{order.customerNIC}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{order.date}</Text>
          </View>
           <View style={styles.row}>
            <Text style={styles.label}>Delivery Address:</Text>
            <Text style={styles.value}>{order.deliveryaddress}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Additional Charges:</Text>
            <Text style={styles.value}>{order.additionalcharges}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Final Price:</Text>
            <Text style={styles.value}>{order.finalprice}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Order status:</Text>
            <Text style={styles.value}>{order.orderstatus}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Customer ID:</Text>
            <Text style={styles.value}>{order.customerID}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Order Type:</Text>
            <Text style={styles.value}>{order.ordertype}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default OrderListPDF;
