import React from 'react';

import { StyleSheet, 
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image style={styles.trace1}
          source={require('./assets/images/tr1.png')}/>
        
       <Text style = {styles.title}>Welcome{"\n"}Back</Text> 
    </View>
    <View style={styles.body}>
          <View style={styles.inputs}>
                <TextInput style={styles.input}
                placeholder='Email...'
                placeholderTextColor='#B1B1B1'/>
          </View>
          <View style={styles.line}></View>
          <View style={styles.inputs}>
                <TextInput style={styles.input}
                placeholder='Password...'
                placeholderTextColor='#B1B1B1'/>
          </View>
          <View style={styles.line}></View>
          
          <View style={styles.nextbox}>
                <View >
                      <Text style={styles.nexttext}>Sign In</Text>
                </View>
                
                <View style={styles.next}>
                     <TouchableOpacity>
                           <Image style={{width : 67,height :67}}
                           source={require('./assets/images/next.png')}/>
                     </TouchableOpacity>
                </View>
                
          </View>

          <View style={styles.nextbox2}>
                <View >
                      <TouchableOpacity>
                             <Text style={styles.text2}>Sign Up</Text>
                      </TouchableOpacity>
                </View>
                
                <View style={styles.next}>
                      <TouchableOpacity>
                            <Text style={styles.text2}>Forgot Password?</Text>
                      </TouchableOpacity>
                </View>
          </View>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
  },
  body: {
    top :-50,
    width : '100%',
  },
  title:{
    color : 'white',
    fontSize : 40,
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    left : '5%',
    top : '-30%',
  },
  inputs:{
    left : 10,
    color : '#B1B1B1',
    alignSelf : 'flex-start',
    paddingLeft : '10%',
  },
  input:{
    fontSize : 20,
    width : 300,
  },
  line:{
    marginTop : 5,
    marginBottom  : '12%',
    alignSelf : 'center',
    width : '80%',
    height : 1,
    backgroundColor : '#B1B1B1',
  },
  nextbox:{
    justifyContent : 'space-between',
    flex : 0.8,
    flexDirection : "row",
    width : '80%',
    alignSelf : "center" ,
  },
  nexttext:{
  top :8,
  left : 3,
  fontSize : 35,
  fontWeight : "bold",
  color : "#4F5460",
  },
  nextbox2:{
    top : 120,
    justifyContent : 'space-between',
    flex : 0.8,
    flexDirection : "row",
    width : '78%',
    alignSelf : "center" ,
  },
  text2:{
    fontSize : 17,
    fontWeight : "bold",
    color : "#4F5460",
    },
  next:{
  },
  trace1:{
    width : 376,
    height : 395, 
  },
  
});
