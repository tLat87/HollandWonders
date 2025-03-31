import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={54}
        height={48}
        fill="none"
        {...props}
    >
        <Path
            fill="#FA801B"
            d="M23.946 1.503c0-.656.43-1.237 1.069-1.434a1.54 1.54 0 0 1 1.708.572l21.378 29.998a1.5 1.5 0 0 1 .105 1.556A1.52 1.52 0 0 1 46.85 33H25.473c-.84 0-1.527-.675-1.527-1.5V1.503Zm-4.19 7.547a1.51 1.51 0 0 1 1.136 1.453V31.5c0 .825-.687 1.5-1.527 1.5H7.15a1.509 1.509 0 0 1-1.327-2.25L18.04 9.753a1.533 1.533 0 0 1 1.717-.703ZM.06 37.904C-.218 36.948.517 36 1.529 36H52.47c1.012 0 1.747.947 1.47 1.903l-.382 1.34C52.071 44.428 47.27 48 41.792 48H12.208C6.73 48 1.929 44.428.44 39.254l-.382-1.34v-.01Z"
        />
    </Svg>
)
export default SvgComponent
