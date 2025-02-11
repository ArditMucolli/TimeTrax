import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const PasswordIcon = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_50_447)">
      <Path
        d="M5.00002 8.33332V6.66666C5.00002 3.90832 5.83335 1.66666 10 1.66666C14.1667 1.66666 15 3.90832 15 6.66666V8.33332M14.1667 18.3333H5.83335C2.50002 18.3333 1.66669 17.5 1.66669 14.1667V12.5C1.66669 9.16666 2.50002 8.33332 5.83335 8.33332H14.1667C17.5 8.33332 18.3334 9.16666 18.3334 12.5V14.1667C18.3334 17.5 17.5 18.3333 14.1667 18.3333Z"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.33 13.3333H13.3383M9.99584 13.3333H10.0042M6.66251 13.3333H6.66917"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_50_447">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PasswordIcon;
