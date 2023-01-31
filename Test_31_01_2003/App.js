import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import PersonList from './src/screens/PersonList';

export default function App() {
  const [switchState,setSwitchState] = useState(false);

  return (
      <View style={styles.container}>
        <Text>Họ tên: Nguyễn Xuân Khoa</Text>
        <Text>MSSV: PH27009</Text>
        <Button style={styles.button}
          title="Thêm mới"
          onPress={() => setSwitchState(!switchState)}
        />
        {
          switchState
          ?
          <>
              <Text>Sub Screen</Text>
              <TextInput placeholder="Tên"/>
              <TextInput placeholder="Mô tả"/>
              <TextInput placeholder="Link ảnh"/>
              <View style={styles.horizontalCon}>
                <Button style={styles.subButton}
                  title="Hủy"
                />
                <Button style={styles.subButton}
                  title="Lưu"
                />
              </View>
          </>
          :
          null
        }
        <PersonList/>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300
  },
  horizontalCon: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },
  subButton: {
    flex: 1,
    margin: 10,
  },
});
