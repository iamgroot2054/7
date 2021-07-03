import React, { Component } from "react";
import {TouchableOpacity,View,Text,StyleSheet,Linking,SafeAreaView,Platform,StatusBar,Alert,FlatList,Image,ImageBackground, Dimensions
} from "react-native";
import axios from "axios";
export default class DailyPic extends Component {
    constructor(props){
super(props)
this.state={
    apod:""
}

    }
    getApod=()=>{
axios
.get("https://api.nasa.gov/planetary/apod?api_key=FLEgPGNEoXHa3wLLqbPOhTAiYImaC6oEy74OngPc")
.then(response=>{
    this.setState({
        apod:response.data
    })
})
.catch(error=>{
    Alert.alert(error.message)
})

    }
    componentDidMount(){
        this.getApod()
    }
    render() {
        return (
            <View style={styles.container}>
                 <ImageBackground  source={require("../assets/stars.gif")} style={styles.backgroundImage}>

 <SafeAreaView  styles={styles.droidSafeArea}/>
<Text style={styles.titleBar}>Astrnomy picture of the day</Text>
<Text style={styles.titleText}>{this.state.apod.title}</Text>
<TouchableOpacity style={styles.listContainer}
onPress={()=>{
    Linking.openURL(this.state.apod.url).catch(err=>console.error("Couldn't load the page",err))
}}>
<View style={styles.iconContainer}>
     <Image source={require("../assets/play-video.png")} style={{width:50,height:50,marginBottom:20}}></Image>
</View>
<View>
<Text styles={styles.explanationText}> {this.state.apod.explanation}</Text>
</View>
</TouchableOpacity>
 </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1


        
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25,
        marginTop:20,
        marginLeft:20,
       color:"white"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
   
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    cardTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        color: "white"
    },
   
  
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: 50,

    },
  
   explanationText:{
    fontSize: 20,
    marginTop: 50,
    color: "white"
   }
});