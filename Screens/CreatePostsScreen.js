import React, {useState} from "react";
import { StyleSheet, View, Text, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import { Camera } from 'expo-camera';
import Header from "../components/CreatePost/header";

export default function UserList() {

    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');
    const [isCameraReady, setIsCameraReady] = useState(false);

    const onCameraReady = () => {
        setIsCameraReady(true);
    };

    const takePhoto = async () => {
        if (isCameraReady) {
            const photo = await camera.takePictureAsync();
            setPhoto(photo.uri);
            console.log(photo.uri)
        }
    };

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View style={styles.body} >
            <Header />
            <View style={{ ...styles.photoContainer, width: (width - 32), maxHeight: (height - 572) }}>
                <Camera
                style={{ ...styles.camera, width: (width - 32), height: (height - 572) }}
                ref={setCamera}
                onCameraReady = { onCameraReady}>
                   {photo &&  <View style={{ position: 'absolute'}}>
                        <Image source={{uri : photo}} style={{width: (width - 32), height: (height - 572)}} />
                    </View>}
                    <TouchableOpacity onPress={takePhoto}>
                         <Image
             fadeDuration={0}
             style={styles.addPhotoScreen} source={require('../assets/images/addPhotoScreen.png')} />
           </TouchableOpacity>
                </Camera>
            </View>
            <Text style={{...styles.text, paddingLeft: 16}}>Загрузити фото</Text>

            <View style={styles.inputContainer}>
                <TextInput style={{...styles.text, color: '#212121'}}
                    placeholder='Назва...'
                >
                </TextInput>
            </View>
            <View style={{ ...styles.inputContainer, flexDirection: 'row'}}>
                <Image style={styles.iconMap}
                    fadeDuration={0} source={require('../assets/images/map-pin.png')}
                />
                <TextInput style={{...styles.text, color: '#212121', paddingLeft: 4}}
                    placeholder='Локація...'
                >
                </TextInput>
            </View>
            <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                <Text style={{...styles.btnText, color: '#BDBDBD'}}>Опублікувати</Text>
                    </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        // justifyContent: 'space-between',
    },
    photoContainer: {
        backgroundColor: '#e8e8e8', 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 32,
        // marginBottom: 8
    },
    addPhotoScreen: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    text: {
        color: '#bdbdbd',
        fontSize: 16,
    },
    inputContainer: {
        marginTop: 32,
        height: 30, 
        marginLeft: 16, 
        marginRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },
    iconMap: {
        width: 24,
        height: 24,
        resizeMode: 'cover',
        paddingLeft: 16
    },
    btn: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    btnText: {
        paddingTop: 16,
        paddingBottom: 16
    },
    camera: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
