import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Search = props => (
  <Svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.5 18L13.875 14.375M15.8333 9.66667C15.8333 13.3486 12.8486 16.3333 9.16667 16.3333C5.48477 16.3333 2.5 13.3486 2.5 9.66667C2.5 5.98477 5.48477 3 9.16667 3C12.8486 3 15.8333 5.98477 15.8333 9.66667Z"
      stroke="#979797"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Search;
