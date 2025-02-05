import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HamburgerMenu = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.75 11H19.25M2.75 5.5H19.25M2.75 16.5H19.25"
      stroke="#041F4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HamburgerMenu;
