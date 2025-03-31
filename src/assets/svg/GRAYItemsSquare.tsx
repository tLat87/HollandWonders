import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill={props.color}
            d="M0 22v-7.333h9.778V22H0Zm12.222 0V9.778H22V22h-9.778ZM0 12.222V0h9.778v12.222H0Zm12.222-4.889V0H22v7.333h-9.778Z"
        />
    </Svg>
)
export default SvgComponent
