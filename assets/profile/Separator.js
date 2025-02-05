import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Separator = props => (
  <Svg
    width={7}
    height={7}
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.5 7C2.53252 7 1.70732 6.67671 1.02439 6.03012C0.341463 5.35542 0 4.51205 0 3.5C0 2.43173 0.341463 1.58835 1.02439 0.96988C1.70732 0.323293 2.53252 0 3.5 0C4.46748 0 5.29268 0.323293 5.97561 0.96988C6.65854 1.58835 7 2.43173 7 3.5C7 4.51205 6.65854 5.35542 5.97561 6.03012C5.29268 6.67671 4.46748 7 3.5 7Z"
      fill="#979797"
    />
  </Svg>
);
export default Separator;
