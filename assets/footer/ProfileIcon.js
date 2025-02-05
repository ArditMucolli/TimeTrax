import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProfileIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5 12.5C15.2614 12.5 17.5 10.2614 17.5 7.5C17.5 4.73858 15.2614 2.5 12.5 2.5C9.73858 2.5 7.5 4.73858 7.5 7.5C7.5 10.2614 9.73858 12.5 12.5 12.5Z"
      stroke="#041F4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.09 22.5C21.09 18.63 17.24 15.5 12.5 15.5C7.76003 15.5 3.91003 18.63 3.91003 22.5"
      stroke="#041F4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProfileIcon;
