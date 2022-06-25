import { StyleSheet, View } from 'react-native';

import { Categories } from '../components/Main';
import { Colors } from '../constans/themes/colors';
import React from 'react';
import { categories } from '../constans/data/Categories';

const CategoriesScreen=({navigation}) =>{
const onHandlerSelectedCategory =(item)=>{
  navigation.navigate('ProductsScreen',{
    categoryId:item.id,
    name:item.title,
  })
}

  return (
    <View style={styles.container}>
      <Categories 
      data={categories}
      onSelected={onHandlerSelectedCategory}
      />
    </View>
  );
}
export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});