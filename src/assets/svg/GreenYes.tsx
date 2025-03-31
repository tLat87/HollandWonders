import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#9DC742"
            d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm-1.714 16.791L6 12.506l1.363-1.363 2.923 2.923 6.351-6.352 1.368 1.36-7.72 7.717Z"
        />
    </Svg>
)
export default SvgComponent
