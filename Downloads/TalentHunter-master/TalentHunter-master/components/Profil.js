import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  ActivityIndicatorBase,
  Button, 
  Platform,
  activateLasers,
  TouchableHighlight,
} from 'react-native';
//import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
 import * as Font from 'expo-font';


export default class Profile extends Component {
    constructor(props){
      super(props);
    //  this.handleLoginClick = this.handleLoginClick.bind(this);
     // this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {
        fontloaded : false,
        image : '../assets/images/star.png',
        starbool : false,
      }
    }

    // handleLoginClick()  {
    //   console.log("Test true")
    //   this.setState({starbool: true});
    // }
  
    // handleLogoutClick() {
    //   console.log("Test false ")
    //   this.setState({starbool: false});
    // }
    Load_New_Image=()=>{
    
      this.setState({
    
        image : '../assets/images/star3.png'

    
      })
    }
    buttonClickListener = () =>{
      this.setState({starbool : !this.state.starbool})
     // alert("True !!!");
    }
    async componentDidMount(){
      await Font.loadAsync({
           'SFProText-Bold': require('../assets/fonts/FontsFree-Net-SFProText-Bold.ttf'),
           'SFProText-Regular': require('../assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
           'SFProText-Semibold': require('../assets/fonts/FontsFree-Net-SFProText-Semibold.ttf')
           }).then(()=>console.log("test"));
           this.setState ({fontloaded : true});
        //  console.log("Component did mount ")

     }
     
   render() {   
    // const starbool = this.state.starbool;
    // let button; 
    //  if (this.state.starbool){
    //    button = <Button title="wow" onClick={this.handleLogoutClick} />;
    //  } else {
    //    button = <Button title="wowssssssssssssssssssssss" onClick={this.handleLoginClick} />;
    //  }
    
    //const [dataLoaded, SetDataLoaded] = useState(false);
    if (!this.state.fontloaded) return <ActivityIndicator size="small" color="#000000" />
    return (

      <ScrollView style={styles.container}>
         <View style={styles.header}>
          {/* <Text style={styles.ccch}> Talent Hunter </Text> */}
        </View>
        <Image style={styles.avatar} source={require('../assets/images/Ala.jpg')} />
        {/* <Button
          onPress={this.buttonClickListener}
          title="Click ME"
          color="#00B0FF"   
          />  */}
        <View style={styles.star} >
          <TouchableOpacity onPress={this.buttonClickListener} style={{width: 24,
            height: 24,
            alignSelf: 'flex-end',
            position: 'absolute',
            marginTop: 140,
      //      opacity : 0,
            }}>    
            {
              (this.state.starbool)? (
                <Image 
                    source ={require('../assets/images/star3.png')}
                    
                    style = {styles.stars} /> 
              )
              :
              
              <Image 
                source ={require('../assets/images/star.png')}
                
                style = {styles.stars} /> 
              
            }
        </TouchableOpacity>
        
        </View>
        
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Nasri Alaeddine</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Experience</Text>
                <Text style={styles.textcardblod}>202</Text>
              </View>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Age</Text>
                <Text style={styles.textcardblod}>10</Text>
              </View>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Projects</Text>
                <Text style={styles.textcardblod}>33</Text>
              </View>

            </View>
            <View style={{width: '100%', flex: 1, flexDirection: 'row' }}>
            <View style={styles.bigcard}>
              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Job</Text>
                <Text style={styles.main}>Etudtiant</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%'}}>
                <Text style={styles.title}>Notes</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe spa sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                <Text style={styles.description}>Plusieurs variations de Lorem Ipsum peuvent être trouvéesais la majeure partie d'entre elles a été altérée par l'addition.</Text>
              
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Location</Text>
                <Text style={styles.main}>Bouraoui Campus</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Languages</Text>
                <Text style={styles.main}>Arabic,French,English</Text>
              </View>

              <View style={styles.line}></View>


              <View style={{width :'80%'}}>
              <Text style={styles.private}>Private Infos :</Text>
              </View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.main}>ia_nasri@esi.dz</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Phone</Text>
                <Text style={styles.main}>+213698367901</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Portfolio</Text>
                <Text style={styles.main}>linkto.website</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Facebook</Text>
                <Text style={styles.main}>linkto.facebook</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>curriculum vitae</Text>
                <Text style={styles.main}>ALANASRI.docs</Text>
              </View>

            </View>
            </View> 

          </View>
        </View>
      </ScrollView>
    );
  }
} 

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    height: 200,
  },
  imageStyle:{
 
    width: 200, 
    height: 300, 
    resizeMode: 'center'
 
   },
   
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  //  marginBottom: 200,
  },
  star: {
    width: '82%',
    alignSelf: 'center',
    position: 'absolute',
  },
  stars: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    position: 'absolute',
    //marginTop: 140,
  },
  starss: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 150,
    opacity :0.1,
  },
  name: {
    fontFamily : 'SFProText-Bold',
    fontSize: 22,
    color: "#000000",
  },
  info: {
    fontFamily : 'SFProText-Regular',
    fontSize: 15,
    color: "#000000",
    marginTop : 5,
    marginBottom : 20,
  },
  body: {
    marginTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  smallcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
 //   backgroundColor : '#3570a7',
    height: 58,
    marginLeft: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    shadowOffset: { width: 10, height: 10, },
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 3,
    elevation: 20
  },
  textcard: {
    fontFamily : 'SFProText-Regular',
    color: '#000',
    fontSize: 14,
    textAlign: 'center'
  },
  textcardblod: {
    color: '#000',
    fontWeight: 'bold',
    /*marginTop : 10,
    fontWeight: 'bold',*/
    fontSize: 17,
    textAlign: 'center'
  },
  bigcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '90%',
    height: 695,
    marginTop: 57,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    shadowOffset: { width: 10, height: 10, },
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 1.0,
    paddingVertical : 20,
    shadowRadius: 3,
    elevation: 20
  },
  private:{
    textAlign : "left",
    color: 'red',
    marginBottom : 10,
    textAlign : "left",
  },
  title: {
    fontFamily : 'SFProText-Bold',
    fontWeight : 'bold',
    textAlign: 'left',
    fontSize : 16,
    /*marginLeft : 20,*/
  },
  main: {
    textAlign: 'right',
    fontSize : 14,
  },
  description: {
    fontSize: 14,
    color: "#000",
    /*marginTop:-2000,*/
    textAlign: 'left'
  },
  line: {
    backgroundColor: "#ECECEC",
    width: '80%',
    height: 2,
    marginTop: 20,
    marginBottom : 20,
  }
});

