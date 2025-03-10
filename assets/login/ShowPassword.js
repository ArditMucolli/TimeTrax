import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
const ShowPassword = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    {...props}>
    <Defs />
    <G
      style={{
        stroke: '#979797',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: '#979797',
        fillRule: 'nonzero',
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <Path
        d="M 45 72.864 C 44.999 72.864 45 72.864 45 72.864 c -14.889 0 -29.874 -8.944 -44.538 -26.586 c -0.616 -0.741 -0.616 -1.816 0 -2.557 C 15.126 26.08 30.111 17.135 45 17.135 c 14.889 0 29.874 8.945 44.539 26.586 c 0.616 0.741 0.616 1.816 0 2.557 C 74.874 63.919 59.888 72.864 45 72.864 z M 4.615 45 C 18.128 60.837 31.709 68.864 45 68.864 S 71.872 60.837 85.386 45 C 71.872 29.163 58.29 21.135 45 21.135 S 18.128 29.163 4.615 45 z"
        style={{
          stroke: '#979797',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: '#979797',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <Path
        d="M 45 64.103 c -10.533 0 -19.102 -8.569 -19.102 -19.103 c 0 -10.533 8.569 -19.102 19.102 -19.102 c 10.533 0 19.103 8.569 19.103 19.102 C 64.103 55.533 55.533 64.103 45 64.103 z M 45 29.898 c -8.327 0 -15.102 6.775 -15.102 15.102 S 36.673 60.103 45 60.103 S 60.103 53.327 60.103 45 S 53.327 29.898 45 29.898 z"
        style={{
          stroke: '#979797',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: '#979797',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </G>
  </Svg>
);
export default ShowPassword;
