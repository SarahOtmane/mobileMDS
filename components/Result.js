import {Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';

import style from '../style.js';

const Result = ({route}) =>{
    const {search} = route.params;
    const [data, setData] = useState([]);

    const fetchMovie = async() =>{
        try {
            const resutls = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
            const dataResult = await resutls.json();
            let tab = [];
            dataResult.forEach(serie => {
                tab.push(serie.show);
            });
            setData(tab);
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    if(data.length === 0){
        return(
            <View style={style.container}>
                <Text style={{marginBottom: 20}}>Un peu de patience ...</Text>
                <ActivityIndicator color={style.color} size='large' />
            </View>
        )
    }else{
        return(
            <View style={style.container}>
                <Text>Résultat</Text>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>(
                        <View style={style.container}>
                            <Text>{item.name}</Text>
                            {item.image && item.image.medium && (
                                <Image source={{uri: item.image.medium}} style={{width: 200, height: 200}} />
                            )}
                            <Text>{item.summary}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}


export default Result;