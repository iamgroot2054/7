import React, { Component } from 'react';
import { Text, View,StyleSheet,StatusBar,SafeAreaView,Platform,
    TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/space.gif")} 
                style={styles.backroundImage}>
                <View style={styles.titleBar}>
                <Text style={styles.titleText} >Space App</Text>
                </View>
<TouchableOpacity style={styles.routeCard}
onPress={()=> this.props.navigation.navigate("SpaceCrafts")}
>
    <Text style={styles.routeText}>Space Craft</Text>
    <Text style={styles.knowMore}> {"Know More--->"} </Text>
    <Text style={styles.bgDigit}>1</Text>
    <Image source={require("../assets/space_crafts.png")} 
    style={styles.iconImage}></Image>
</TouchableOpacity>

<TouchableOpacity style={styles.routeCard}
onPress={()=> this.props.navigation.navigate("StarMap")}

>
    <Text style={styles.routeText}>Star Map</Text>
    <Text style={styles.knowMore}> {"Know More--->"} </Text>
    <Text style={styles.bgDigit}>2</Text>
    <Image source={require("../assets/star_map.png")} style={styles.iconImag}></Image>
</TouchableOpacity>

<TouchableOpacity style={styles.routeCard}
onPress={()=> this.props.navigation.navigate("DailyPic")}

>
    <Text style={styles.routeText}>Daily Pic</Text>
    <Text style={styles.knowMore}> {"Know More--->"} </Text>
    <Text style={styles.bgDigit}>3</Text>
    <Image source={require("../assets/daily_pictures.png")} style={styles.iconImg}></Image>
</TouchableOpacity>
</ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1

    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"  
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:10,
        borderRadius:30,
        backgroundColor:"white",
    

        
    },
    routeText:{
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        marginTop:55,
        paddingLeft:10

    },
    backroundImage:{
        flex:1,
        resizeMode:"cover"
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15,

    },
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,1)",
        fontSize:130,
        left:-60,
        bottom:-15,
        zIndex:-1,
        top:-20
    },
    iconImage:{
        position:"absolute",
        height:120,
        width:200,
        resizeMode:"contain",
        right:-40,
        top:0,
        alignSelf:"center",
        alignItems:"center"
    },
    iconImg:{
        position:"absolute",
        height:100,
        width:125,
        resizeMode:"contain",
        right:0,
        top:10,
        alignSelf:"center",
        alignItems:"center"
    },
    iconImag:{
        position:"absolute",
        height:100,
        width:120,
        resizeMode:"contain",
        right:0,
        top:10,
        alignSelf:"center",
        alignItems:"center"
    }

})