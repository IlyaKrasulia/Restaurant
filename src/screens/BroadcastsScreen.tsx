import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export const BroadcastsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Трансляции</Text>
      <ScrollView style={{height: '90%'}}>
        {['', '', '', '', '', ''].map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.item,
                index % 2 !== 0
                  ? {backgroundColor: 'rgba(229, 229, 229, 0.80)'}
                  : null,
              ]}>
              <View>
                <Text style={styles.itemTitle}>IPL</Text>
                <Text style={styles.itemDescription}>Napoli</Text>
                <Text style={styles.itemDescription}>Liverpool</Text>
                <Text style={styles.itemTitle}>26.06 - 00:20</Text>
              </View>
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/img/broadcast-mark.png')}
              />
            </View>
          );
        })}
      </ScrollView>
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
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    color: 'rgba(0, 0, 0, 0.50)',
    marginVertical: 3,
  },
});
