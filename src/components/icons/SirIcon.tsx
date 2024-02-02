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
const SirIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M5.054 10.089C5.625.707 10.883.033 11.125.007c.041-.004.083-.007.125-.007a5.64 5.64 0 0 1 3.019 1.021 1.269 1.269 0 0 0 1.463 0A5.634 5.634 0 0 1 18.75 0c.044 0 .088.003.131.007.236.026 5.5.7 6.065 10.082a.918.918 0 0 1-.571.911A25.391 25.391 0 0 1 15 12.5 25.395 25.395 0 0 1 5.625 11a.918.918 0 0 1-.571-.911Zm23.312 2.397a1.178 1.178 0 0 0-1.285-.043C25.705 13.25 21.922 15 15 15S4.296 13.25 2.919 12.443a1.178 1.178 0 0 0-1.285.043A3.291 3.291 0 0 0 0 15c0 4.613 7.742 5 15 5s15-.387 15-5a3.29 3.29 0 0 0-1.634-2.514Zm-7.741 8.764a4.374 4.374 0 0 0-4.044 2.718 5.857 5.857 0 0 0-3.162 0 4.367 4.367 0 1 0 .241 2.54c.43-.155.883-.242 1.34-.258.457.016.91.103 1.34.259a4.375 4.375 0 1 0 4.285-5.259Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={15}
        x2={15}
        y1={-14}
        y2={57}
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
export default SirIcon;
