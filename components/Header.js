import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>任务清单</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: '#008080',
    },
    text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
    }
  });

export default Header;