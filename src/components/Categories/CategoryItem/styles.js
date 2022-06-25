import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({

    containerItem:{
        flex:1,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:15,
    },
    Item:{
    flex:1,
    borderRadius:10,
    shadowColor: '#000000',
    shadowOffset:{
        width: 0, height:2
    },
    shadowRadius:8,
    elevation:4,
    justifyContent:"flex-end",
    alignItems:"flex-end",
    padding: 12,
    }
    ,Title:{
        fontFamily:"OpenSansItalic",
    }
})