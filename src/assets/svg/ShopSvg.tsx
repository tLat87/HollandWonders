import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M30 0H0v4.5a6 6 0 0 0 10.5 3.969 6 6 0 0 0 9 0A6 6 0 0 0 30 4.5V0Z"
        />
        <Path
            fill="#000"
            d="M0 30V11.21a8.97 8.97 0 0 0 6 2.29 9 9 0 0 0 4.5-1.204A8.964 8.964 0 0 0 15 13.5a9 9 0 0 0 4.5-1.204A8.964 8.964 0 0 0 24 13.5a8.97 8.97 0 0 0 6-2.29V30h-8.25V18H8.25v12H0Z"
        />
        <Path fill="#000" d="M11.25 21v9h7.5v-9h-7.5Z" />
    </Svg>
)
export default SvgComponent
