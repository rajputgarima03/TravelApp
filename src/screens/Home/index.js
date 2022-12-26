import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text,SafeAreaView} from 'react-native';
import Title from '../../components/Title';
const Home = () =>{
    const [title, setTitle] = useState('First Text about to change');
    useEffect(()=>{
     setTimeout(()=>{
      setTitle('Text Changed')
     }, 3000)
    }, [])
    return(
        <SafeAreaView>
               <View>
                    <Title text={title}/>
                    <Title></Title>
               </View>
        </SafeAreaView>
    )

}

export default Home; 