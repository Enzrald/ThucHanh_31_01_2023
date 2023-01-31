import {
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from 'react-native';

 const PersonList = (props) => {
    
    const personList = [
        {
            id: 1,
            name: 'Khoa',
            des: 'Gầy',
            link: 'https://i1.sndcdn.com/avatars-5NyIQbdBS7ttQfvo-wpyqbw-t500x500.jpg'
        },
        {
            id: 2,
            name: 'Huy',
            des: 'Mập',
            link: 'https://reactnative.dev/img/tiny_logo.png'
        }
    ];

    return (
        <SafeAreaView>
            <FlatList 
                data={personList}
                renderItem = {({item}) => (
                    <View>
                        <Text>{'\n'}</Text>
                        <Image 
                        source={{
                            uri: item.link,
                        }}/>
                        <Text>{item.name}</Text>
                        <Text>{item.des}</Text>
                    </View>
                )}
                keyExtractor = {(item) => item.id}
            />
        </SafeAreaView>
    )
 };
 export default PersonList;

 const styles = StyleSheet.create({
    safeView: {
        flex: 1
    }
 });