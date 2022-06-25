import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductItems =({item, onSelected})=>{
return(
<TouchableOpacity
style={styles.containerItem}
onPress={()=>onSelected(item)}
>
    <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
    <View>
        <Text style={styles.detailText}>
            PRECIO S/ : {item.price}
        </Text>
    </View>
</TouchableOpacity>

)}
export default ProductItems;