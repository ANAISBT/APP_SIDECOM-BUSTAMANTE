import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ProductsDetails=({})=> {
  return (
    <View style={styles.container}>
      <Text>ProductosDetails</Text>
    </View>
  );
}
export default ProductsDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});