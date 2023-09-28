import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export const TableReservationScreen = ({navigation}: any) => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [commentarValue, setCommentarValue] = useState('');
  const submitForm = () => {
    console.log(
      `Имя: ${nameValue}, номер столика: ${numberValue}, время: ${timeValue}, дата: ${dateValue}, коментарий: ${commentarValue} `,
    );
    Alert.alert('Бронирование', 'Ваша бронь успешно добавлена', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Assortment')},
    ]);
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Бронь столика</Text>
      <View style={{justifyContent: 'space-between', height: '95%'}}>
        <View style={styles.formWrapper}>
          <View style={styles.formLevel}>
            <View style={{width: '70%'}}>
              <Text>Имя*</Text>
              <TextInput
                onChangeText={text => setNameValue(text)}
                value={nameValue}
                style={styles.input}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text>№*</Text>
              <TextInput
                onChangeText={text => setNumberValue(text)}
                style={styles.input}
                value={numberValue}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View style={[styles.formLevel, {marginTop: 15}]}>
            <View style={{width: '46%'}}>
              <Text>Время</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setTimeValue(text)}
                value={timeValue}
              />
            </View>
            <View style={{width: '46%'}}>
              <Text>Дата*</Text>
              <TextInput
                onChangeText={text => setDateValue(text)}
                style={styles.input}
                keyboardType="number-pad"
                value={dateValue}
              />
            </View>
          </View>
          <View style={[styles.formLevel, {marginTop: 15}]}>
            <View style={{width: '100%'}}>
              <Text>Комментарий</Text>
              <TextInput
                onChangeText={text => setCommentarValue(text)}
                value={commentarValue}
                style={[styles.input, {height: 120}]}
                placeholder="Оставьте Ваше сообщение"
                multiline
              />
            </View>
          </View>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#ff402fa6"
          onPress={submitForm}>
          <Text style={styles.buttonText}>Перейти в каталог</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
  },
  formWrapper: {
    marginTop: 15,
  },
  formLevel: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    color: '#000',
    borderColor: '#A1A4B1',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF3F2F',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
