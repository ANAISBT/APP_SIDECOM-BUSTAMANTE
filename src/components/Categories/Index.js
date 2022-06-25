import CategoryItem from "./CategoryItem/CategoryItems";
import { FlatList } from "react-native";
import React from "react";

const Categories = ({ data, onSelected }) => {
  const renderItem = ({ item }) => {
    return (
    <CategoryItem item={item} onSelected={onSelected} />
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

export default Categories;
