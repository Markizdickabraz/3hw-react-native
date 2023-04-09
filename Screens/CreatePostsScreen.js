import { StyleSheet, View, Text } from "react-native";
import Footer from "../components/post/footer";
import Header from "../components/post/header";

export default function UserList() {
    return (
        <View style={styles.body} >
            <Header />
            <View>
            </View>
            {/* <Footer /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    }
})