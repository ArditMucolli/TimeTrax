import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LogOutIcon = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5832 6.3C12.3248 3.3 10.7832 2.075 7.40817 2.075H7.29984C3.57484 2.075 2.08317 3.56666 2.08317 7.29166V12.725C2.08317 16.45 3.57484 17.9417 7.29984 17.9417H7.40817C10.7582 17.9417 12.2998 16.7333 12.5748 13.7833M7.49984 10H16.9832M15.1248 7.20833L17.9165 10L15.1248 12.7917"
      stroke="#E33030"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LogOutIcon;
