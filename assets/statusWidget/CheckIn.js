import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const CheckIn = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={24} height={24} rx={12} fill="#31B073" fillOpacity={0.15} />
    <Path
      d="M11.5812 19H15.9206C16.9214 19 17.8803 18.1725 18.0483 17.1667L18.9791 11.4886C19.0911 10.7896 18.7412 9.85511 18.2022 9.41284L13.352 5.46099C12.6031 4.84753 11.3923 4.84753 10.6504 5.45386L5.80012 9.41284C5.2542 9.85511 4.90425 10.7896 5.02323 11.4886L5.2192 12.687M8.65198 14.1422L9.9015 15.5689L8.65198 16.9955M6.40202 15.5689H9.8665"
      stroke="#31B073"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckIn;
