import { View,Image, StyleSheet, Dimensions } from "react-native"


export default function Footer() {
    const width = Dimensions.get('window').width;
    // const height = Dimensions.get('window').height;

    const shadow =  {shadowColor: "#000",
                shadowOffset: {
	            width: 0,
	            height: -0.5,
                                },
                shadowOpacity: 0.58,
                // shadowRadius: 16.00,
            }
    
    return (
        <View style={{...styles.footer, paddingLeft:(width / 100* 21), paddingRight: (width / 100* 21), ...shadow}}>
        <Image fudeDuration={0} style={styles.iconGridUser} source={require('../../assets/images/grid.png')}></Image>
        <Image fudeDuration={0} style={styles.iconNew} source={require('../../assets/images/new.png')}></Image>
        <Image fudeDuration={0} style={styles.iconGridUser} source={require('../../assets/images/user.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 34,
    },
    iconGridUser: {
        resizeMode: 'cover',
        width: 40,
        height: 40,
        marginLeft: 31,
        marginRight:31,
    },
    iconNew: {
        resizeMode: 'cover',
        width: 70,
        height: 40,
    }
})