import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            stroke="#0C0D0F"
            strokeLinecap="round"
            strokeWidth={2}
            d="M4.158 17.649c1.88-.808 3.65-1.244 5.312-1.307 1.66-.064 3.8.221 6.416.856"
        />
        <Path
            stroke="#0C0D0F"
            strokeLinecap="round"
            strokeWidth={2}
            d="M9.591 19.002c-.345-4.258-.202-7.566.431-9.924"
        />
        <Path
            fill="#0C0D0F"
            fillRule="evenodd"
            stroke="#0C0D0F"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.022 9.609c.717-2.715 1.98-4.334 3.79-4.857 1.808-.523 3.552-.284 5.232.72.009 2.206-.95 3.822-2.873 4.849-1.925 1.027-3.975.79-6.149-.712Zm-.094-.48c.376-3.241-.377-5.525-2.26-6.85C5.786.956 3.606.66 1.128 1.392c-.432 2.991.23 5.253 1.985 6.785 1.755 1.532 4.027 1.85 6.815.954Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
