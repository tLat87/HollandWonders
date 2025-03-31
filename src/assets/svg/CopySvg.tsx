import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        fill="none"
        {...props}
    >
        <Path
            fill="#FFCB03"
            d="M17.4 8.7H2.9C1.3 8.7 0 10 0 11.6v14.5C0 27.7 1.3 29 2.9 29h14.5c1.6 0 2.9-1.3 2.9-2.9V11.6c0-1.6-1.3-2.9-2.9-2.9Z"
        />
        <Path
            fill="#FFCB03"
            d="M26.1 0H11.6a2.9 2.9 0 0 0-2.9 2.9v2.9h11.6a2.9 2.9 0 0 1 2.9 2.9v11.6h2.9a2.9 2.9 0 0 0 2.9-2.9V2.9A2.9 2.9 0 0 0 26.1 0Z"
        />
    </Svg>
)
export default SvgComponent
