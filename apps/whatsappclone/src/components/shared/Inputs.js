import React from 'react'
import { TextInput } from 'react-native'

const MyTextInput = (props) => (
    <TextInput 
        style={{ 
            height: 45, 
            fontSize: 18, 
            color: props.textColor || 'black'
        }}         
        {...props} 
    />
)

export { MyTextInput }
