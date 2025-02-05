import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Bell = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5858 19.25C12.4247 19.5278 12.1934 19.7584 11.915 19.9187C11.6367 20.079 11.3212 20.1634 11 20.1634C10.6788 20.1634 10.3633 20.079 10.085 19.9187C9.80664 19.7584 9.57533 19.5278 9.41417 19.25M16.5 7.33334C16.5 5.87465 15.9205 4.4757 14.8891 3.44425C13.8576 2.4128 12.4587 1.83334 11 1.83334C9.54131 1.83334 8.14236 2.4128 7.11091 3.44425C6.07946 4.4757 5.5 5.87465 5.5 7.33334C5.5 13.75 2.75 15.5833 2.75 15.5833H19.25C19.25 15.5833 16.5 13.75 16.5 7.33334Z"
      stroke="#041F4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Bell;
