import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ProfileIcon = ({color}: {color: string}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={24} fill="none">
    <Path
      fill={color}
      stroke={color}
      strokeWidth={2}
      d="M1 13.75c0-1.514 1.165-2.771 2.671-2.918l.586.697c3.51 4.178 9.976 4.178 13.486 0l.586-.697C19.835 10.978 21 12.236 21 13.75v3.16c0 3.355-2.746 6.09-6.15 6.09h-7.7C3.746 23 1 20.265 1 16.91v-3.16Zm14.5-8.295c0 2.452-2.007 4.454-4.5 4.454S6.5 7.907 6.5 5.455C6.5 3.002 8.507 1 11 1s4.5 2.002 4.5 4.455Z"
    />
  </Svg>
);
export default ProfileIcon;
