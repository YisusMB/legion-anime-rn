import { Text } from 'react-native'
import React from "react";

type TextProps = {
    style?: object,
    children: React.ReactNode,
    numberOfLines?: number,
}

const CustomTextDefaultProps: TextProps = {
    style: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "PTSans_700Bold",
        // textShadowColor: 'black',
        // textShadowOffset: {width: -2, height: 5},
        // textShadowRadius: 3
    },
    children: ''
}

export default function CustomText(props: TextProps) {
    const mergedProps = { ...CustomTextDefaultProps, ...props, style: { ...CustomTextDefaultProps.style, ...props.style } }
    console.log(mergedProps)
    return <Text {...mergedProps} >{props.children}</Text>
}

CustomText.defaultProps = CustomTextDefaultProps