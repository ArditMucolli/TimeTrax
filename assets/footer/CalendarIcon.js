import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const CalendarIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_49_252)">
      <Path
        d="M8.24994 2.5V5.5M16.2499 2.5V5.5M3.74994 9.59H20.7499M15.6199 22.5C16.3199 23.13 17.2399 23.5 18.2499 23.5C18.9394 23.5014 19.6173 23.3233 20.217 22.9831C20.8167 22.643 21.3174 22.1525 21.6699 21.56C22.0399 20.96 22.2499 20.25 22.2499 19.5C22.2485 18.5277 21.893 17.5892 21.2499 16.86M15.6199 22.5C15.3099 22.24 15.0399 21.92 14.8299 21.56M15.6199 22.5H8.24994C4.74994 22.5 3.24994 20.5 3.24994 17.5V9C3.24994 6 4.74994 4 8.24994 4H16.2499C19.7499 4 21.2499 6 21.2499 9V16.86M14.8299 21.56C14.4493 20.9404 14.2485 20.2272 14.2499 19.5M14.8299 21.56C14.4599 20.96 14.2499 20.25 14.2499 19.5M14.2499 19.5C14.2499 17.29 16.0399 15.5 18.2499 15.5C19.4499 15.5 20.5199 16.03 21.2499 16.86M16.6899 19.5L17.6799 20.49L19.8099 18.52M12.2449 14.2H12.2549M8.54394 14.2H8.55394M8.54394 17.2H8.55394"
        stroke="#041F4E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_49_252">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0.25 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CalendarIcon;
