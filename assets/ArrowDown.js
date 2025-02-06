import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ArrowDown = props => (
  <Svg
    width={14}
    height={8}
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13 1L7 7L1 1"
      stroke="#979797"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowDown;
