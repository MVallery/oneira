import React, { useEffect } from 'react';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Line } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedLine = Animated.createAnimatedComponent(Line);

export const FloatingNodes = ({
  node1 = { x: 12, y: 12 },
  node2 = { x: 22, y: 40 },
  node3 = { x: 4, y: 20 }, // 32,
  node4 = { x: 32, y: 50 }, // 42,
  style,
}: {
  node1?: { x: number; y: number };
  node2?: { x: number; y: number };
  node3?: { x: number; y: number };
  node4?: { x: number; y: number };
  style?: any;
}) => {
  const cy1 = useSharedValue(node1.y);
  const cy2 = useSharedValue(node2.y);
  const cy3 = useSharedValue(node3.y);
  const cy4 = useSharedValue(node4.y);

  useEffect(() => {
    cy1.value = withRepeat(
      withTiming(node1.y - 2, { duration: 2000 }),
      -1,
      true,
    );
    cy2.value = withRepeat(
      withTiming(node2.y + 2, { duration: 2500 }),
      -1,
      true,
    );
    cy3.value = withRepeat(
      withTiming(node3.y + 2, { duration: 3000 }),
      -1,
      true,
    );
    cy4.value = withRepeat(
      withTiming(node4.y + 2, { duration: 3500 }),
      -1,
      true,
    );
  }, []);

  const animatedProps1 = useAnimatedProps(() => ({
    cy: cy1.value,
  }));

  const animatedProps2 = useAnimatedProps(() => ({
    cy: cy2.value,
  }));

  const animatedProps3 = useAnimatedProps(() => ({
    cy: cy3.value,
  }));
  const animatedProps4 = useAnimatedProps(() => ({
    cy: cy4.value,
  }));

  //   const lineProps = useAnimatedProps(() => ({
  //   y1: node1.cy.value,
  //   y2: node2.cy.value,
  //   x1: node1.cx,
  //   x2: node2.cx,
  // }));
  const animatedLineProps = useAnimatedProps(() => ({
    x1: node1.x, // fixed cx for node1
    y1: cy1.value,
    x2: node2.x, // fixed cx for node2
    y2: cy2.value,
  }));

  const animatedLineProps3 = useAnimatedProps(() => ({
    x1: node2.x,
    y1: cy2.value,
    x2: node3.x,
    y2: cy3.value,
  }));

  const animatedLineProps4 = useAnimatedProps(() => ({
    x1: node3.x,
    y1: cy3.value,
    x2: node4.x,
    y2: cy4.value,
  }));

  return (
    <Svg
      width='100'
      height='200'
      viewBox='0 0 36 36'
      style={[
        {
          position: 'absolute',
          left: 0,
          top: 100,
        },
        style || {},
      ]}
    >
      <AnimatedLine
        animatedProps={animatedLineProps}
        stroke='#AFAEAE'
        strokeWidth='2'
      />

      <AnimatedLine
        animatedProps={animatedLineProps3}
        stroke='#AFAEAE'
        strokeWidth='2'
      />
      <AnimatedLine
        animatedProps={animatedLineProps4}
        stroke='#AFAEAE'
        strokeWidth='2'
      />
      <AnimatedCircle
        cx={node1.x}
        r='3'
        fill='#DA711C'
        animatedProps={animatedProps1}
      />
      <AnimatedCircle
        cx={node2.x}
        r='3'
        fill='#AFAEAE'
        animatedProps={animatedProps2}
      />
      <AnimatedCircle
        cx='4'
        r='3'
        fill='#AFAEAE'
        animatedProps={animatedProps3}
      />
      <AnimatedCircle
        cx='32'
        r='3'
        fill='#AFAEAE'
        animatedProps={animatedProps4}
      />
    </Svg>
  );
};

// type Props = {
//   style?: StyleProp<ViewStyle>;
// };

// export const FloatingNodes = ({ style }: Props) => {
//   const float = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(float, { toValue: -5, duration: 3000, useNativeDriver: true }),
//         Animated.timing(float, { toValue: 5, duration: 3000, useNativeDriver: true }),
//       ])
//     ).start();
//   }, []);

//   return (
//     <Animated.View style={[style, { transform: [{ translateY: float }] }]}>
//       <Svg width="100" height="100" viewBox="0 0 36 29" fill="none">
//         <Line x1="5.14" y1="23.49" x2="11.14" y2="13.49" stroke="#AFAEAE" strokeWidth="2" />
//         <Line x1="25.41" y1="21.81" x2="14.41" y2="13.81" stroke="#AFAEAE" strokeWidth="2" />
//         <Path d="M27.1 21L31.5 5.5" stroke="#AFAEAE" strokeWidth="2" />
//         <Circle cx="32" cy="4" r="3" fill="#0A192F" />
//         <Circle cx="32" cy="4" r="3" stroke="#AFAEAE" strokeWidth="2" />
//         <Circle cx="32" cy="4" r="3" stroke="#DA711C" strokeWidth="2" />
//         <Circle cx="12" cy="12" r="3" fill="#0A192F" />
//         <Circle cx="12" cy="12" r="3" stroke="#AFAEAE" strokeWidth="2" />
//         <Circle cx="4" cy="25" r="3" fill="#0A192F" />
//         <Circle cx="4" cy="25" r="3" stroke="#AFAEAE" strokeWidth="2" />
//         <Circle cx="26" cy="22" r="3" fill="#0A192F" />
//         <Circle cx="26" cy="22" r="3" stroke="#AFAEAE" strokeWidth="2" />
//       </Svg>
//     </Animated.View>
//   );
// };

// const FloatingNodes = ({style}: {style: any}) => {
//   const translateY = useSharedValue(0);

//   translateY.value = withRepeat(withTiming(-10, { duration: 3000 }), -1, true);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: translateY.value }],
//     position: 'absolute',
//     top: height * 0.3,
//     left: width * 0.2,
//     opacity: 0.05,
//   }));

//   return (
//     <Animated.View style={animatedStyle}>
//       <Svg width={36} height={29} viewBox="0 0 36 29" fill="none">
//         <Line x1="5.14" y1="23.48" x2="11.14" y2="13.48" stroke="#AFAEAE" strokeWidth={2} />
//         {/* Add rest of svg content here */}
//       </Svg>
//     </Animated.View>
//   );
// };

export default FloatingNodes;
