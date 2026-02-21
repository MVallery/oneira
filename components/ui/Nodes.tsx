import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

// left: 290px;
//     top: 229px;
//     transform: scaleX(4) scaleY(5) rotate(-12deg);
//     opacity: 0.1;
const Nodes = ({
  node1 = { x: 12, y: 12 },
  node2 = { x: 22, y: 40 },
  node3 = { x: 4, y: 20 }, // 32,
  node4 = { x: 32, y: 50 }, // 42,
  style,
  scale = 1,
}: {
  node1?: { x: number; y: number };
  node2?: { x: number; y: number };
  node3?: { x: number; y: number };
  node4?: { x: number; y: number };
  style?: any;
  scale?: number;
}) => {
  return (
    <Svg
      width={100}
      height={100}
      // viewBox="0 0 100 100"
      style={[
        {
          position: 'absolute',
          left: 100,
          top: 100,
          transform: [{ scaleX: scale }, { scaleY: scale }],
        },
        style || {},
      ]}
    >
      <Line
        x1={node1.x}
        y1={node1.y}
        x2={node2.x}
        y2={node2.y}
        stroke='#AFAEAE'
        strokeWidth='2'
      />
      <Line
        x1={node2.x}
        y1={node2.y}
        x2={node3.x}
        y2={node3.y}
        stroke='#AFAEAE'
        strokeWidth='2'
      />
      <Line
        x1={node3.x}
        y1={node3.y}
        x2={node4.x}
        y2={node4.y}
        stroke='#AFAEAE'
        strokeWidth='2'
      />
      <Circle
        cx={node1.x}
        cy={node1.y}
        r='3'
        strokeWidth='2'
        stroke='#AFAEAE'
      />
      <Circle
        cx={node2.x}
        cy={node2.y}
        r='3'
        strokeWidth='2'
        stroke='#AFAEAE'
      />
      <Circle
        cx={node3.x}
        cy={node3.y}
        r='3'
        strokeWidth='2'
        stroke='#AFAEAE'
      />
      <Circle
        cx={node4.x}
        cy={node4.y}
        r='3'
        strokeWidth='2'
        stroke='#DA711C'
      />
    </Svg>
  );
};

export default Nodes;
