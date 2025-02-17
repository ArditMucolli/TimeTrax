import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HomeIcon = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5 17.99V14.99M9.52 2.83998L4.13 7.03998C3.23 7.73998 2.5 9.22998 2.5 10.36V17.77C2.5 20.09 4.39 21.99 6.71 21.99H18.29C20.61 21.99 22.5 20.09 22.5 17.78V10.5C22.5 9.28998 21.69 7.73998 20.7 7.04998L14.52 2.71998C13.12 1.73998 10.87 1.78998 9.52 2.83998Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeIcon;
