import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles' 
import {Entypo} from "@expo/vector-icons"

const index = () => {
  return (
    <View style={styles.headerMain}>
     <View style={styles.headerOne}>
        <Image  style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.headerOneWiew}>
            <Text style={{fontWeight:"600", fontSize:16}}>Ev</Text>
            <Text style={{fontWeight:"500",fontSize:11.5,color:"#6E7480",marginLeft:6,marginRight:3}}>Sümerevler,1729.Sk. No:55 Adıyaman</Text>
               <Entypo name="chevron-right" size={22} color="#5D3EBD" />
        
        </View>
        <View style={styles.headerTwo}>
         <Text style={{fontSize:13,fontWeight:"bold",color:"#5D3EBD"}}>TVS</Text>
         <Text style={{fontSize:18,fontWeight:"900",color:"#5D3EBD"}}>13dk</Text>

         </View>
         
         
         </View>

     <View>


     </View>
    </View>
  )
}

export default index 