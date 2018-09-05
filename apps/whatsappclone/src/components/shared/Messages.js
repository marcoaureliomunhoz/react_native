import React from 'react'
import { Text } from 'react-native'

const MyMessageText = (props) => (
    <Text 
        style={{ 
            textAlign: 'center', 
            color: props.textColor || 'black', 
            backgroundColor: props.backgroundColor || 'transparent'
        }}
    >{props.text}</Text>
)

export { MyMessageText }
