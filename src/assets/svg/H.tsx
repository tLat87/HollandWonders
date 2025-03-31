import * as React from "react"
import Svg, { SvgProps, Mask, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={56}
        height={71}
        fill="none"
        {...props}
    >
        <Mask
            id="a"
            width={56}
            height={71}
            x={0}
            y={0}
            fill="#000"
            maskUnits="userSpaceOnUse"
        >
            <Path fill="#fff" d="M0 0h56v71H0z" />
            <Path
                fillRule="evenodd"
                d="M48.58 62.738 55 56.32V1h-6.42v28.87H22.47V1h-6.42v28.892H7.37L2 37.39h14.051v31.865h6.42V37.422H48.58v25.316Z"
                clipRule="evenodd"
            />
        </Mask>
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M48.58 62.738 55 56.32V1h-6.42v28.87H22.47V1h-6.42v28.892H7.37L2 37.39h14.051v31.865h6.42V37.422H48.58v25.316Z"
            clipRule="evenodd"
        />
        <Path
            fill="#fff"
            d="m55 56.32.706.708.293-.293v-.415h-1Zm-6.42 6.418h-1v2.414l1.706-1.707-.706-.707ZM55 1h1V0h-1v1Zm-6.42 0V0h-1v1h1Zm0 28.87v1h1v-1h-1Zm-26.109 0h-1v1h1v-1Zm0-28.87h1V0h-1v1Zm-6.42 0V0h-1v1h1Zm0 28.892v1h1v-1h-1Zm-8.682 0v-1h-.514l-.299.418.813.582ZM2 37.39l-.813-.582L.054 38.39H2v-1Zm14.051 0h1v-1h-1v1Zm0 31.865h-1v1h1v-1Zm6.42 0v1h1v-1h-1Zm0-31.833v-1h-1v1h1Zm26.109 0h1v-1h-1v1Zm5.712 18.191-6.42 6.418 1.414 1.414 6.42-6.417-1.414-1.415ZM54 1v55.32h2V1h-2Zm-5.42 1H55V0h-6.42v2Zm1 27.87V1h-2v28.87h2Zm-27.108 1H48.58v-2H22.47v2Zm-1-29.87v28.87h2V1h-2Zm-5.42 1h6.42V0h-6.42v2Zm1 27.892V1h-2v28.892h2Zm-1-1H7.37v2h8.682v-2Zm-9.495.418-5.369 7.498 1.626 1.164 5.37-7.497-1.627-1.165ZM2 38.39h14.051v-2H2v2Zm15.051 30.865V37.39h-2v31.865h2Zm5.42-1h-6.42v2h6.42v-2Zm-1-30.833v31.833h2V37.422h-2Zm27.109-1H22.47v2H48.58v-2Zm1 26.316V37.422h-2v25.316h2Z"
            mask="url(#a)"
        />
    </Svg>
)
export default SvgComponent
