import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PlusIcon = props => (
  <Svg
    width={39}
    height={38}
    viewBox="0 0 39 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_49_257)">
      <Path
        d="M18.5 0.833313C9.31668 0.833313 1.83334 8.31665 1.83334 17.5C1.83334 26.6833 9.31668 34.1666 18.5 34.1666C27.6833 34.1666 35.1667 26.6833 35.1667 17.5C35.1667 8.31665 27.6833 0.833313 18.5 0.833313ZM25.1667 18.75H19.75V24.1666C19.75 24.85 19.1833 25.4166 18.5 25.4166C17.8167 25.4166 17.25 24.85 17.25 24.1666V18.75H11.8333C11.15 18.75 10.5833 18.1833 10.5833 17.5C10.5833 16.8166 11.15 16.25 11.8333 16.25H17.25V10.8333C17.25 10.15 17.8167 9.58331 18.5 9.58331C19.1833 9.58331 19.75 10.15 19.75 10.8333V16.25H25.1667C25.85 16.25 26.4167 16.8166 26.4167 17.5C26.4167 18.1833 25.85 18.75 25.1667 18.75Z"
        fill="#1E5CD7"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default PlusIcon;
