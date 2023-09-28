import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from './src/components/Header';
import {MenuScreen} from './src/screens/MenuScreen';
import {AssortmentScreen} from './src/screens/AssortmentScreen';
import {CartScreen} from './src/screens/CartScreen';
import {TableReservationScreen} from './src/screens/TableReservationScreen';
import {BroadcastsScreen} from './src/screens/BroadcastsScreen';
import {AboutUsScreen} from './src/screens/AboutUsScreen';
import {ProductScreen} from './src/screens/ProductScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const products = [
  {
    title: 'Нигири с тунцом опаленным',
    description:
      'Тунец опаленный, стружка тунца, майонез, соус тайский, сладкий чили, васаби 0,5 г',
    price: 2.9,
    img: require('./src/assets/img/nigiri.png'),
  },
  {
    title: 'Нигири с тунцом маринованным',
    description:
      'Тунец маринованный в соевом соусе, майонез, икра летучей рыбы черная, васаби 0,5 г',
    price: 2.9,
    img: require('./src/assets/img/nigiritunec.png'),
  },
  {
    title: 'Нигири с окунем опаленным',
    description:
      'Морской окунь опаленный, майонез, соус тайский сладкий чили,орех кешью, васаби 0,5 г',
    price: 1.7,
    img: require('./src/assets/img/nigiriokun.png'),
  },
  {
    title: 'Нигири с окунем маринованным',
    description:
      'Морской окунь маринованный в соевом соусе, икра летучей рыбы оранжевая, майонез, васаби 0,5 г',
    price: 1.7,
    img: require('./src/assets/img/nigiriokunm.png'),
  },
];

function App(): JSX.Element {
  const [activeSreen, setActiveScreen] = useState('Assortment');
  const [cart, setCart] = useState([]);

  console.log(cart, ' app');
  console.log(cart, ' app');
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {activeSreen !== 'Product' && (
          <Header
            type={
              activeSreen === 'Menu'
                ? 'menu'
                : activeSreen === 'Cart'
                ? 'cart'
                : ''
            }
          />
        )}
        <Stack.Navigator initialRouteName={'Assortment'}>
          <Stack.Screen
            name={'Assortment'}
            component={AssortmentScreen}
            initialParams={{setActiveScreen, setCart, cart, products}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Cart'}
            component={CartScreen}
            initialParams={{
              setActiveScreen,
              type: 'cart',
              setCart,
              cart,
            }}
            key={Math.random()}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Product'}
            component={ProductScreen}
            initialParams={{setActiveScreen, setCart, cart}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'About Us'}
            component={AboutUsScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Broadcasts'}
            component={BroadcastsScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'TableReservation'}
            component={TableReservationScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Menu'}
            component={MenuScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

{
  /* <SafeAreaView>
        {/* <Header /> 
        <ProductScreen />
      </SafeAreaView> */
}
