import React from 'react';
import { createDrawerNavigation } from 'react-native';

import Simples from '../src/componentes/Simples';
import ParImpar from '../src/componentes/ParImpar';
import { Inverter, Megasena } from '../src/componentes/Multi';

export default createDrawerNavigation({
    Megasena: {
        screen: () => <Megasena numeros={8} />,
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 });
