import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={26}
        fill="none"
        {...props}
    >
        <Path fill={props.color} d="M14.718 0H5.661v4.529h9.057V0Z" />
        <Path
            fill={props.color}
            d="M0 2.264h3.396v4.529h13.586V2.264h3.397v8.963a7.075 7.075 0 0 0-9.624 6.604c0 2.902 1.636 5.196 2.86 6.54.172.19.343.368.51.536H0V2.264Z"
        />
        <Path
            fill={props.color}
            d="m17.831 25.7-.23-.15c-.21-.136-.416-.277-.619-.422-.763-.563-1.47-1.2-2.111-1.899-1.127-1.238-2.417-3.133-2.417-5.398a5.378 5.378 0 0 1 10.755 0c0 2.266-1.29 4.16-2.417 5.398-.641.7-1.348 1.336-2.112 1.9-.202.146-.41.282-.619.42l-.23.152Zm-1.415-8.718v2.265h2.83v-2.265h-2.83Z"
        />
    </Svg>
)
export default SvgComponent
