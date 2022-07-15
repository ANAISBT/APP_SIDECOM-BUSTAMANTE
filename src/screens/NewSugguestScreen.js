import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { Button } from 'react-native';
import { Colors } from '../constans/themes/colors';
import ImageSelector from '../components/ImageSelector';
import { addPlace } from '../store/PlaceSlices';
import { useDispatch } from 'react-redux';

const NewSuggestScreen=({navigation}) =>{

     const dispatch=useDispatch();
     const [title,setTitle]=useState("");
     const handleTitleChange=(text)=>setTitle(text);
     const handleSave = () =>{
         dispatch(addPlace(title));
         navigation.navigate("Sugerencias");
     }

   return (
     <ScrollView style={styles.container}>
         <View style={styles.Detailscontainer}>
             <Text style={styles.title}>Titulo</Text>
             <TextInput 
             style={styles.input} 
             value={title} 
             onChangeText={handleTitleChange}/>
             <ImageSelector 
             onImage={(image)=>{
                console.log(image);
             }}
             />
             <Button 
             title="Grabar Dirección" 
             color={Colors.green} 
             onPress={()=>handleSave()}/>
         </View>
     </ScrollView>
   )
}

export default NewSuggestScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
     Detailscontainer:{
         padding: 20,
     },
     title:{
         fontSize:18,
         marginBottom:20,
         color: Colors.black,
     },
     input:{
         borderBottomColor: Colors.black,
         borderBottomWidth:2,
         marginBottom: 20,
         paddingHorizontal:2,
         paddingVertical:5,
     }
})