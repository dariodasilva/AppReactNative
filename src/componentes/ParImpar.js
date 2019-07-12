import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

function parOuImpar(num) {
    const v = num % 2 === 0 ? 'Par' : 'Impar';
    return <Text style={Padrao.ex}>{v}</Text>;
}
    
export default props =>
    <View>
        {parOuImpar(props.numero)}
          
            {  // ? <Text style={Padrao.ex}>Par</Text>
            // : <Text style={Padrao.ex}>Impar</Text>

            }
    </View>;
