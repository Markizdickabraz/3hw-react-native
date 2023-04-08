import { StyleSheet, View } from "react-native";
import Footer from "../components/post/footer";
import Header from "../components/post/header";

export default function AddPost() {
    return (
        <View style={styles.body} >
            <Header />
            <Footer />
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