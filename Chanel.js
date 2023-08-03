import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { items } from "./Model";
import Card from './Card';

const Chanel = () => {
  return (
      <ScrollView>
          {items.map((item, index) => (
                  <Card item={item} key={index} />
          ))}
      </ScrollView>
  );
}

export default Chanel