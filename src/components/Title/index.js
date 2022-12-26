import React, { useState, useEffect}  from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Title = ({text}) =>{
    const [stateText, setText] = useState(text);
     useEffect(()=>{
       setText(text)
     },[text])
     
    const onTextChange = ()=>{
        setText('Updated Text')
    }
    return(
        <View style = {styles.title}>
            <Text onPress={onTextChange}> {stateText}</Text>
        </View> 
    )
}
Title.defaultProps = {
    text : "Default Prop"
}
export default Title 