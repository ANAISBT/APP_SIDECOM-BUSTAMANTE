import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

const ProductsDetails=({ })=> {
  const product=useSelector(state=>state.products.selected);
  const {title,description,price}=product;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name:</Text>
      <Text>{title}</Text>
      <Text style={styles.title}>Description:</Text>
      <Text>{description}</Text>
      <Text style={styles.title}>Price:</Text>
      <Text>{price}</Text>
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
  title:{
    fontFamily:"OpenSansBold",
    fontSize:15,
    margin: 10,
  }
});