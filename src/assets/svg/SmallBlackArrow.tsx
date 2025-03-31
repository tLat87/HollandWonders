import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M6.213 6.213C10.356 2.071 12.426 0 15 0c2.574 0 4.644 2.07 8.787 6.213C27.93 10.356 30 12.426 30 15c0 2.574-2.07 4.644-6.213 8.787C19.644 27.93 17.574 30 15 30c-2.574 0-4.644-2.07-8.787-6.213C2.07 19.644 0 17.574 0 15c0-2.574 2.07-4.644 6.213-8.787Zm11.556 3.465a1.124 1.124 0 1 0-1.539 1.642l1.924 1.805h-5.153c-.833 0-2.067.225-3.131.942-1.122.758-1.995 2.035-1.995 3.933a1.125 1.125 0 0 0 2.25 0c0-1.102.46-1.7 1.005-2.067a3.554 3.554 0 0 1 1.87-.558h5.154L16.23 17.18a1.125 1.125 0 0 0 1.539 1.64l4-3.75a1.124 1.124 0 0 0 0-1.64l-4-3.752Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
