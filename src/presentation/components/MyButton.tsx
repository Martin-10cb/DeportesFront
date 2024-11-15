import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  placeholder: string;
  color?: string;
  margin?: number;
  width?: string | number;
  height?: string | number;
  onPress: () => void;
}

export const MyButton = ({
  placeholder,
  margin = 20,
  color = '#00D2D3',
  width = '100%',
  height = 50,
  onPress,
}: Props) => {
  //Función para calcular el tamaño basado en porcentaje o número
  const calculateSize = (
    size: string | number,
    axis: 'width' | 'height',
    parentSize: number,
  ) => {
    if (typeof size === 'string' && size.endsWith('%')) {
      const percentage = parseFloat(size.replace('%', '')) / 100;
      return Math.floor(percentage * parentSize);
    }
    return typeof size === 'number' ? size : parseInt(size, 10);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: color,
          marginVertical: margin,
          marginHorizontal: 'auto',
          width:
            width === 'auto'
              ? '100%'
              : calculateSize(width || '100%', 'width', 300),
          height:
            height === 'auto'
              ? 'auto'
              : calculateSize(height || '100%', 'height', 150),
        },
      ]}>
      <View>
        <Text style={styles.text}>{placeholder}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#879EF4',
    width: '100%',
    height: 'auto',
    borderRadius: 15,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
