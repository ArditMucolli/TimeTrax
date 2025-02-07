import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownloadPayslip = props => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.00016 9.66669V14.6667M8.00016 14.6667L9.66683 13M8.00016 14.6667L6.3335 13"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.8332 8.83335V13C18.8332 17.1667 17.1665 18.8334 12.9998 18.8334H7.99984C3.83317 18.8334 2.1665 17.1667 2.1665 13V8.00002C2.1665 3.83335 3.83317 2.16669 7.99984 2.16669H12.1665"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.8332 8.83335H15.4998C12.9998 8.83335 12.1665 8.00002 12.1665 5.50002V2.16669L18.8332 8.83335Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DownloadPayslip;
