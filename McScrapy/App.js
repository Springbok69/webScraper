import React, {useState, useRef} from 'react'
import {TouchableOpacity, FlatList,Text, View, Button, StyleSheet, Platform, SafeAreaView, Pressable, Image} from 'react-native'
import {Card} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


// main app rendering
const thisApp = () => {


//function that is SUPPOSED to add 2 to the state
//const adder = setState(state + 1, [state])
// state and setstate
const[state, setState] = useState(50)
const adder = () => setState(state + 2)
const decrementer = ()=> setState(state-2)

const passIt = " Langford"
const RefContainer = useRef("Mike"+ passIt)
const Tab = createBottomTabNavigator()
const Data1 = [{key: 203, name: "mike langford"},
              {key: 204, name: "Joe Biden"},
              {key: 205, name: "Hunter Biden"},
              {key: 206, name: "The BigGuy"},
              {key: 207, name: "mike langford"},
              {key: 208, name: "Joe Biden"},
              {key: 209, name: "Hunter Biden"},
              {key: 210, name: "The BigGuy"},
              {key: 211, name: "mike langford"},
              {key: 212, name: "Joe Biden"},
              {key: 213, name: "Hunter Biden"},
              {key: 214, name: "The BigGuy"}]




  function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="tester" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}




return(
<SafeAreaView style = {{flex: 1,backgroundColor: '#FF5733'}}>
<View >
<View style = {{marginTop: 50, alignItems: 'center'}}>
<View style = {{paddingTop: 5,borderRadius: 14,borderWidth: 4, borderColor: '#DAF7A6' ,width: 200, height: 200}}> 
<View  style = {{ alignItems: 'center'}}>
 <View style ={styles.bigblue}>
  <Button title="increment" onPress={adder} color="#DAF7A6" backgroundColor = 'blue' >increment</Button>
  </View>
  <Text style={{color:'#FFFFFF',fontSize:33, textAlignVertical: "center",textAlign: "center", padding: 10}}>{state} </Text>
  <View style ={styles.bigblue}>
  <Button title="decrement" color ="#DAF7A6"  onPress={decrementer}  >decrement</Button>
  </View>
 
  <Text style = {{color:'#FFFFFF',padding: 10,paddingBottom: 20, marginBottom:20}}>my useRef name is.... {RefContainer.current}</Text>
  
  <Pressable  onPress={adder}  style={ ({pressed}) => [
    {borderColor:'#626262',borderWidth: 3 ,borderRadius:10, backgroundColor: pressed ? '#BEBEBE' : 'grey'}]
   

    } >
<Text style = {{fontSize: 16,
    marginBottom:20,
    marginTop: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlignVertical: "center",
    textAlign: "center",
    color: 'white',}}>Pressable button for {RefContainer.current}</Text>

  </Pressable>
  

<View>
    <FlatList data={Data1} renderItem={({item}) => (
      <Text style ={styles.listing}  >{item.name}</Text>
    )   } />

   



</View>



  </View>
  <View>

</View>

</View>



</View>

</View>





  </SafeAreaView>




  )



}


const styles = StyleSheet.create({
  bigButton:{
    borderRadius:10
  },
  inside:{
borderRadius: 15
  },
  bigblue: {
           
          justifyContent: 'center',
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 20,
          borderColor: 'black',
          borderWidth: 1,
          width: 120,
          alignItems: 'center',
          borderRadius: 100/2
  },
  listing:{
    flex:1,
    paddingHorizontal: 20,
    padding:10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: .5
  }
});





export default thisApp;
















// import React, { useState, useEffect } from 'react';
// import { Text, View } from 'react-native';

// const Blink = (props) => {
//   const [isShowingText, setIsShowingText] = useState(true);

//    useEffect(() => {
//      const toggle = setInterval(() => {
//        setIsShowingText(!isShowingText);
//      }, 1000);

//      return () => clearInterval(toggle);
//   })

//   if (!isShowingText) {
//     return null;
//   }

//   return <Text>{props.text}</Text>;
// }

// const BlinkApp = () => {
//   return (
//     <View style={{marginTop: 50}}>
//       <Blink text='I love to blink' />
//       <Blink text='Yes blinking is so great' />
//       <Blink text='Why did they ever take this out of HTML' />
//       <Blink text='Look at me look at me look at me' />
//     </View>
//   );
// }

// export default BlinkApp;



