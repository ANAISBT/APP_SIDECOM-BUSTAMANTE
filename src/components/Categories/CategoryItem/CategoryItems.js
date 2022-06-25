import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CategoryItem = ({item, onSelected}) => {
    return(
        <View style={styles.containerItem}>
            <TouchableOpacity
            style={{...styles.Item, backgroundColor:item.color}}
            onPress={()=>onSelected(item)}>
                <View>
                    <Text style={styles.Title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 

export default CategoryItem;