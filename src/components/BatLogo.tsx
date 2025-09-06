import React from 'react';
import { View, Image } from 'react-native';
import batlog from '../../assets/18576-batman-vetement-logo.png'
export function BatLogo() {
  return (
    <>
        <Image 
        source={batlog}
        style ={{
          resizeMode: 'contain',
          height: 350}}
        />
            

    </> 
  );
}