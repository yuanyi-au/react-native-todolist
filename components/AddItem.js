import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.container}>
            <TextInput 
            placeholder="计划中..." 
            style={StyleSheet.input} 
            onChangeText={onChange}
            />
            <TouchableOpacity 
            style={styles.btn} 
            onPress={() => {
                addItem(text)
                setText('')
            }}>
                <Text style={styles.btnText}><Icon name="plus" size={20} /> 添加任务</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#bebebe',
        padding: 9,
        margin: 5,
        borderRadius: 8,
    },
    btnText: {
        color: '#008080',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default AddItem;