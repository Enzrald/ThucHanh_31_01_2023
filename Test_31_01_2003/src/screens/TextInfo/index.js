import { Text,StyleSheet } from "react-native";

// export default function TextInfo({name}){


export default function TextInfo(props){
    const name = props.name;
    const desc = props.desc;

    return (
        <>
        <Text style={styles.text}>{name}</Text>
        {
            desc
                ? <Text style={styles.text}>Description{desc}</Text>
                : null
        }
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        color: 'rgb(20, 167, 42)',
        alignItems: 'center',
        justifyContent: 'center',
      },
});