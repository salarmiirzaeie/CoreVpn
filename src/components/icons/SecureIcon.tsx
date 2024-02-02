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
const SecureIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M23.226 2.675 15.395.064a1.25 1.25 0 0 0-.79 0L6.774 2.675A6.241 6.241 0 0 0 2.5 8.604V15c0 9.454 11.5 14.675 11.992 14.892a1.25 1.25 0 0 0 1.015 0C16 29.675 27.5 24.454 27.5 15V8.604a6.241 6.241 0 0 0-4.274-5.929Zm-2.328 9.471-5.34 5.34a2.342 2.342 0 0 1-1.67.691h-.04a2.34 2.34 0 0 1-1.682-.75l-2.882-3a1.25 1.25 0 1 1 1.801-1.727l2.805 2.925 5.235-5.25a1.25 1.25 0 0 1 1.767 1.768l.006.003Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={15}
        x2={13}
        y1={-26.5}
        y2={56}
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
export default SecureIcon;
