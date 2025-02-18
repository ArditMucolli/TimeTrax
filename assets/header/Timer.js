import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const Timer = ({fill = 'red', stroke = 'red', strokeWidth = 1.5}) => (
  <Svg
    width={30}
    height={22}
    viewBox="0 0 30 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect
      x={0.75}
      y={0.75}
      width={28.5}
      height={20.5}
      rx={4.25}
      fill={fill}
      fillOpacity={0.2}
    />
    <Rect
      x={0.75}
      y={0.75}
      width={28.5}
      height={20.5}
      rx={4.25}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M15 6.09867C11.8133 6.09867 9.21997 8.692 9.21997 11.8787C9.21997 15.0653 11.8133 17.6653 15 17.6653C18.1866 17.6653 20.78 15.072 20.78 11.8853C20.78 8.69867 18.1866 6.09867 15 6.09867ZM15.5 11.6653C15.5 11.9387 15.2733 12.1653 15 12.1653C14.7266 12.1653 14.5 11.9387 14.5 11.6653V8.332C14.5 8.05867 14.7266 7.832 15 7.832C15.2733 7.832 15.5 8.05867 15.5 8.332V11.6653ZM16.9266 5.3H13.0733C12.8066 5.3 12.5933 5.08667 12.5933 4.82C12.5933 4.55334 12.8066 4.33334 13.0733 4.33334H16.9266C17.1933 4.33334 17.4066 4.54667 17.4066 4.81334C17.4066 5.08 17.1933 5.3 16.9266 5.3Z"
      fill={stroke}
    />
  </Svg>
);

export default Timer;
