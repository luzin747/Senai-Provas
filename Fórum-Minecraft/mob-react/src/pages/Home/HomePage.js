import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput,ScrollView } from 'react-native';
import * as React from 'react';

import Header from '../../../components/Header/header';
import Main from '../../../components/Main/main';
// import Routes from './components/routes';

export default function HomePage( navigation) {
    return (
        <ScrollView>
        <View>
            
                <Header />

                <Main />
            

        </View>
        </ScrollView>



    );

}
