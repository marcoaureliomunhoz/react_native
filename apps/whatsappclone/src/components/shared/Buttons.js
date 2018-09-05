import React from 'react'
import { 
    Button, 
    TouchableOpacity, 
    Text, 
    Image
} from 'react-native'

const MyButton = (props) => (
    <Button color='#0F544B' {...props} />
)

const MyTouchableOpacity = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={{ ...props.style }}
    >
        <Text 
            style={[
                { 
                    textAlign: 'center', 
                    color: props.textColor || 'black'
                }, 
                props.textStyle
            ]}
        >{props.title}</Text>
    </TouchableOpacity>
)

const MyTouchableOpacityImage = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={{ ...props.style }}
    >
        <Image source={props.source} />
    </TouchableOpacity>
)

export { MyButton, MyTouchableOpacity, MyTouchableOpacityImage }
