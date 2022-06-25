import { Button, StyleSheet, Text, View } from 'react-native';

import { Products } from '../components/Main';
import React from 'react';
import { products } from '../constans/data/Products';

const ProductsScreen=({navigation,route})=> {

  const filterProducts= products.filter(item=>item.categoryId == route.params.categoryId)

const onHandlerSelectedProducts=(item)=>{
  navigation.navigate('ProductsDetailsScreen',{
    productId:item.id,
    name:item.title,
  })
}

  return (
    <View style={styles.container}>
      <Products 
      data={filterProducts}
      onSelected={onHandlerSelectedProducts}
      />
    </View>
  );
}
export default ProductsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});