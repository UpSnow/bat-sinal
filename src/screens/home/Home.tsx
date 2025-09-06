import React from 'react';
import { View, Pressable,Text} from 'react-native';
import { styles } from './HomeStyle';
import{BatLogo} from '../../components/BatLogo'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <BatLogo/>
 
      <>

        <Pressable 
        onPress={() => navigation.navigate('Form')}
        style={styles.button}> 
            <Text style ={styles.text}>🦇 Activate bat signal 🦇</Text>
        </Pressable>

      </>
      

    </View>
  );
}