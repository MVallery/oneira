import { set } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'

const CustomColorPicker = ({ onChangeColor, swatchesOnly = true, color, palette = 
  ['#39260d','#515357', '#7b1c1c','#7b461c','#7b6d1c','#3a7b1c','#1c7b75','#1c257b','#541c7b','#7b1c60']
 }: {onChangeColor: any, swatchesOnly?: boolean, color?: string, palette?: string[]}) => {

  const onColorChange = (color: string) => {
    onChangeColor(color);
  };
  return (
     <ColorPicker
      color={color}
      swatchesOnly={true}
      onColorChange={onColorChange}
      swatches={true}
      discrete={true}
      useNativeDriver={false}
      useNativeLayout={false}
      palette={palette}
    />
  );
};

export default CustomColorPicker;
