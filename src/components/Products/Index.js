import { FlatList } from "react-native";
import ProductItems from "./ProductsItems.js/ProductItems";
import React from "react";

const Products = ({ data, onSelected }) => {
  const renderItem = ({ item }) => {
    return (
    <ProductItems item={item} onSelected={onSelected} />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default Products;
