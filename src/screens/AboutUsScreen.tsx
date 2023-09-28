import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const AboutUsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>О нас</Text>
      <View style={{justifyContent: 'space-between', height: '87%'}}>
        <View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemTitle}>Начало</Text>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/img/about-us.png')}
              />
            </View>
            <Text style={styles.itemText}>
              Мы — Суши Кафе, ваши надежные проводники в удивительный мир
              японской кулинарии. Наши шеф-повара, вдохновленные старинными
              традициями и современными тенденциями, создают уникальные блюда,
              которые поражают вкусом и эстетикой.
            </Text>
          </View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemTitle}>Блюда</Text>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/img/about-us.png')}
              />
            </View>
            <Text style={styles.itemText}>
              В нашем кафе вы всегда найдете свежайшие суши и сашими, а также
              множество других традиционных японских блюд. Наш ассортимент
              подходит как для любителей классики, так и для тех, кто хочет
              попробовать что-то новое и необычное.
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo.png')}
          />
        </View>
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
  item: {
    padding: 20,
    backgroundColor: 'rgba(229, 229, 229, 0.50)',
    borderRadius: 20,
    marginVertical: 15,
  },
  itemTitle: {
    fontSize: 20,
  },
  itemText: {},
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    height: 60,
    width: 155,
  },
});
