import React from 'react'
import { View } from 'react-native'

const MyIf = (props) => {
    if (props.test) {
        return (
            <View>{props.children}</View>
        )
    }
    return false
}

export { MyIf }
