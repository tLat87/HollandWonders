import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M.81 14.53a1.078 1.078 0 0 1 0-1.524L11.166 2.648h-5.53a1.078 1.078 0 0 1 0-2.155h8.132a1.078 1.078 0 0 1 1.078 1.078v8.132a1.079 1.079 0 0 1-2.155 0v-5.53L2.334 14.531a1.078 1.078 0 0 1-1.525 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
