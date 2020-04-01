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
       <View style={styles.taskdrawer}>
              <TouchableOpacity>
                        <Image style={styles.menubutton}
                        source={require('./assets/images/menuwhite.png')}/>
              </TouchableOpacity>     
              <TouchableOpacity>
                        <Image style={styles.typeitem}
                        source={require('./assets/images/Work.png')}/>
              </TouchableOpacity>  
              <TouchableOpacity>
                        <Image style={styles.watermark}
                        source={require('./assets/images/watermark.png')}/>
              </TouchableOpacity>  
              <View style={styles.circle}></View>
              <TouchableOpacity>
                        <Image style={styles.typeitem}
                        source={require('./assets/images/family.png')}/>
              </TouchableOpacity>  
              <TouchableOpacity>
                        <Image style={styles.typeitem}
                        source={require('./assets/images/sport.png')}/>
              </TouchableOpacity>  
              <TouchableOpacity>
                        <Image style={styles.typeitem}
                        source={require('./assets/images/polival.png')}/>
              </TouchableOpacity>  
              <TouchableOpacity>
                        <Image style={styles.typeitem}
                        source={require('./assets/images/+add.png')}/>
              </TouchableOpacity>  
        </View>
        
        <View style={styles.header}>
                <TouchableOpacity>
                <Image style={styles.back}
                source={require('./assets/images/back.png')}/>
                </TouchableOpacity>
          </View> 
        <View style={styles.body}>
              <Text style = {styles.title}>Work</Text>
              <View style={styles.taskbox}>
                  <Text style={styles.taskname}>First task : name of the task 
                  coding the website fx
                  </Text>
                  <View style={styles.time}>
                      <Text style={styles.timetext}>28 - Nov</Text>
                      <Text style={styles.timetext}>10:00- 13:00</Text>
                  </View>
              </View>
              <View style={styles.taskbox}>
                  <Text style={styles.taskname}>First task : name of the task 
                  coding the website fx
                  </Text>
                  <View style={styles.time}>
                      <Text style={styles.timetext}>28 - Nov</Text>
                      <Text style={styles.timetext}>10:00- 13:00</Text>
                  </View>
              </View>
              <View style={styles.taskboxc}>
                  <Text style={styles.tasknamec}>First task : name of the task 
                  coding the website fx
                  </Text>
                  <View style={styles.timec}>
                      <Text style={styles.timetextc}>28 - Nov</Text>
                      <Text style={styles.timetextc}>Completed</Text>
                  </View>
              </View>
              <View style={styles.taskbox}>
                  <Text style={styles.taskname}>First task : name of the task 
                  coding the website fx
                  </Text>
                  <View style={styles.time}>
                      <Text style={styles.timetext}>28 - Nov</Text>
                      <Text style={styles.timetext}>10:00- 13:00</Text>
                  </View>
              </View>
              <View style={styles.taskbox}>
                  <Text style={styles.taskname}>First task : name of the task 
                  coding the website fx
                  </Text>
                  <View style={styles.time}>
                      <Text style={styles.timetext}>28 - Nov</Text>
                      <Text style={styles.timetext}>10:00- 13:00</Text>
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
  //  justifyContent: 'center',
  },
  taskdrawer:{
    height : '100%',
    top : 0,
    position : 'absolute',
    width: '23%',
    backgroundColor : '#4F5460',
    alignSelf : 'flex-end',
    alignItems : "center",
  },
  header: {
    top : 40,
    height : '10%',
    justifyContent : 'space-between',
   // flex : 0,
    flexDirection : "row",
    width : '80%',
    alignSelf : "center" ,
    marginBottom : 20,
  },
  body: {
  //  top :'100%',
    width : '100%',
  },
  back: {
     width : 22,
     height : 30,
   },
   menubutton: {
     top : 40,
    width : 30,
    height : 30,
    marginBottom : 150,
  },
  typeitem:{
    width : 230,
    height : 100,
    left :10,
  
  },
  circle:{
    backgroundColor : '#A362EA',
    height  : 14,
    width : 14,
    borderRadius : 10,
    top : 225,
    right : 76,
    position : "absolute",
    },
    
  watermark:{
    position : "absolute",
    width : 14.8,
    height : 75.2,
    right : 27,
    top : -87,
  
  },
  taskbox:{
    borderColor: "#4F5460",
    borderWidth: 0.3,
    width : 240,
    height : 90,
    left : 15,
    borderRadius : 10,
    marginBottom : 30,
  },
   
  taskboxc:{
    borderColor: "#4F5460",
    backgroundColor : '#A362EA',
    borderWidth: 0.3,
    width : 240,
    height : 90,
    left : 15,
    borderRadius : 10,
    marginBottom : 30,
  },
  title:{
    color : "#4F5460",
    fontSize : 40,
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    left : '10%',
    marginBottom : 20,
  }, 
  taskname:{
    color : "#4F5460",
    fontSize : 17,
    top  : 7,
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    marginBottom : 30,
    left : 10,
    flexWrap: 'wrap',
  },
  time:{
    color : "#4F5460",
    fontSize : 10,
    top  : -7,
    width : '90%',
    flexDirection : "row",
    alignSelf : "center" ,
    justifyContent : 'space-between',
  },
  timetext:{
    color : "#4F5460",
    fontSize : 17,
  },
  tasknamec:{
    color : "#fff",
    fontSize : 17,

    top  : 7,
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    marginBottom : 30,
    left : 10,
    flexWrap: 'wrap',
  },
  timec:{
    color : "#fff",
    fontSize : 10,
    top  : -7,
    width : '90%',
    flexDirection : "row",
    alignSelf : "center" ,
    justifyContent : 'space-between',
  },
  timetextc:{
    color : "#fff",
    fontSize : 17,
    fontWeight : 'bold'
  }
});
