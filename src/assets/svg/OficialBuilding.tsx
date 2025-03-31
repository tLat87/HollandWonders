import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#0C0D0F"
            d="M10.623 0h3.125c.344 0 .625.281.625.625v2.5a.627.627 0 0 1-.625.625h-3.125V5h7.5c.69 0 1.25.559 1.25 1.25s-.56 1.25-1.25 1.25H1.873c-.691 0-1.25-.559-1.25-1.25S1.183 5 1.874 5h7.5V.625c0-.344.28-.625.624-.625h.625ZM2.5 8.75H5v7.5H6.56v-7.5h2.5v7.5h1.875v-7.5h2.5v7.5h1.562v-7.5h2.5v7.668a.68.68 0 0 1 .07.043l1.874 1.25c.457.305.665.875.504 1.402-.16.528-.648.887-1.199.887H1.25a1.248 1.248 0 0 1-.691-2.29l1.875-1.25c.023-.015.047-.026.07-.042L2.5 8.75Z"
        />
    </Svg>
)
export default SvgComponent
