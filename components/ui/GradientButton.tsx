import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-paper';
import Svg, {
  Defs,
  Ellipse,
  RadialGradient,
  Stop
} from 'react-native-svg';

import CustomText from '@/components/ui/Text';
import { useAppTheme } from '@/state/themeContext';

export interface CustomButtonProps {
  onPress?: any;
  onLongPress?: any;
  icon?: string;
  color?: string;
  active?: boolean;
  gradientOpacity?: number;
  children: any;
  id?: string;
}
// tried to use this since it's similar for behavior but ended up doing some weird stuff, so probably should split this out
const GradientButton = ({
  onPress,
  onLongPress,
  icon,
  color,
  active,
  gradientOpacity = 1,
  children,
  id,
}: CustomButtonProps) => {
  const { theme } = useAppTheme();
  const getBaseOpacity = () => {
    return active ? 1 : 0.4;
  };

  const baseOpacity = getBaseOpacity();
  const opacity = useRef(new Animated.Value(baseOpacity)).current;

  useEffect(() => {
    const newOpacity = getBaseOpacity();
    if (active) {
      pulseOpacity(newOpacity);
    } else {
      Animated.timing(opacity, {
        toValue: newOpacity,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  const pulseOpacity = (baseOpacity: number) => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: baseOpacity, // return to full
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPressButton = () => {
    onPress();
    let newOpacity = getBaseOpacity();
    pulseOpacity(newOpacity);
  };

  return (
    <Pressable onPress={onPressButton} onLongPress={onLongPress}>
      <View style={[styles.button, active ? styles.activeButton : {}]}>
        <Animated.View
          style={{ opacity, position: 'relative', flex: 1, width: 94 }}
        >
          <Svg
            width='95'
            height='88'
            viewBox='0 0 95 88'
            fill='none'
            style={[styles.gradient, active ? styles.active : {}]}
          >
            {/* //fillOpacity={isActive ? 1 : 0.4} /> */}
            <Ellipse
              cx='47.5'
              cy='44'
              rx='47.5'
              ry='44'
              fill={`url(#${id || children})`}
              fillOpacity={1}
            />
            <Defs>
              <RadialGradient
                id={id || children}
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(47.5 44) rotate(-89.2085) scale(38.6378 35.4776)'
              >
                <Stop stopColor={color} stopOpacity={gradientOpacity} />
                <Stop offset='1' stopColor='#737373' stopOpacity='0' />
              </RadialGradient>
            </Defs>
          </Svg>
        </Animated.View>

        {icon && (
          <View style={[!active ? styles.inactive : {}]}>
            <Icon source={icon} size={20} />
          </View>
        )}
        <CustomText size='xs' style={!active ? styles.inactive : {}}>
          {children}
        </CustomText>
      </View>
    </Pressable>
  );
};

export default GradientButton;

export const styles = StyleSheet.create({
  button: {
    // backgroundColor: 'red',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    width: 85,
  },
  activeButton: {
    opacity: 1,
  },
  gradient: {
    position: 'absolute',
    top: -25,
    bottom: 0,
    borderRadius: 5,
    zIndex: -1,
    width: '100%',
    // opacity: 0.7,
  },
  active: {
    // opacity: 1,
  },
  inactive: {
    opacity: 0.3,
    // color: '#737373'
  },
});
