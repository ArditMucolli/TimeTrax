import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Filter = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.66663 19.25V12.8333M3.66663 9.16667V2.75M11 19.25V11M11 7.33333V2.75M18.3333 19.25V14.6667M18.3333 11V2.75M0.916626 12.8333H6.41663M8.24996 7.33333H13.75M15.5833 14.6667H21.0833"
      stroke="#041F4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Filter;
