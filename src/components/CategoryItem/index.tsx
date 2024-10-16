import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import { TouchableOpacity,Image,Text,Dimensions,StyleSheet } from 'react-native'
import { Category} from '../../models'


const {width,height}=Dimensions.get("window")
type CategoryItemProps= {
    item:Category

}
function index({item}:CategoryItemProps) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity testID='category-item' onPress={() => navigation.navigate("CategoryDetails",{category:item.name})} style={{width:width*0.25,height:width*0.24,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
        <Image style={{width:width*0.18,height:width*0.18,borderRadius:10}} source={{uri:item.src}} />
        <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

})

export default index
