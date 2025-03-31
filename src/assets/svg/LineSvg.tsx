import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={269}
        height={25}
        fill="none"
        {...props}
    >
        <Path stroke="#fff" d="M1 1c103.391 30.346 161.767 30.986 267 0" />
    </Svg>
)
export default SvgComponent
