import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FFCB03"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.21 23.573a1.217 1.217 0 0 1-1.42 0c-6.116-4.36-12.608-13.329-6.045-19.81A9.627 9.627 0 0 1 10.5 1.001c2.533 0 4.964.994 6.755 2.763 6.563 6.48.071 15.447-6.046 19.81Z"
        />
        <Path
            stroke="#FFCB03"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 12.4a2.533 2.533 0 1 0 0-5.066 2.533 2.533 0 0 0 0 5.066Z"
        />
    </Svg>
)
export default SvgComponent
