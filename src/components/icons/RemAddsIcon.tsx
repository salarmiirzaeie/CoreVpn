import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const RemAddsIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M15 0a15 15 0 1 0 15 15A15.016 15.016 0 0 0 15 0Zm5 16.25H10a1.25 1.25 0 0 1 0-2.5h10a1.25 1.25 0 0 1 0 2.5Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={15}
        x2={15}
        y1={-15.5}
        y2={53}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#825FFE" />
        <Stop offset={1} stopColor="#030026" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default RemAddsIcon;
