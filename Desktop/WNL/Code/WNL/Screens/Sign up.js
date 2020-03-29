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
          source={require('./assets/images/tr2.png')}/>
        
       <Text style = {styles.create}>Create</Text> 
       <Text style = {styles.title}>Account</Text> 
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
                placeholder='Username...'
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
                      <Text style={styles.nexttext}>Sign Up</Text>
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
                             <Text style={styles.text1}>Sign In</Text>
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
    top :'-68%',
    width : '100%',
  },
  create:{
    color : "#4F5460",
    fontSize : 40,
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    left : '10%',
    top : '-68%',
    marginBottom : -7,
  },
  title:{
    color : 'white',
    fontSize : 40,
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    left : '10%',
    top : '-68%',
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
    color : 'white'
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
    top  : 20,
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
  color : "#ffffff",
  },
  nextbox2:{
    top : 140,
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
  text1:{
      fontSize : 17,
      fontWeight : "bold",
      color : "#ffffff",
    },
  next:{
  },
  trace1:{
    width : 376,
    height : 735, 
  },
  
});
