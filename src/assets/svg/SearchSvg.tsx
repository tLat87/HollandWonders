import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.444 20.444 26 26M1 12.111a11.111 11.111 0 1 0 22.223 0 11.111 11.111 0 0 0-22.223 0Z"
        />
    </Svg>
)
export default SvgComponent
