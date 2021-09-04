import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

const ListItem = ({product}) =>{

    return(
        <View style={styles.container}>
            <View>
                <Image source = {product.picture} style={styles.image}/>
            </View>

            <View style={{ flex: 1 , marginLeft: 15}}>
                <Text style={[styles.Text , styles.Header]}>{product.name}</Text>
                <Text style={styles.Text}>{product.description}</Text>
                <Text style={styles.Text}>{product.price}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        flexDirection: 'row'
    },

    image: {
        width: 90,
        height: 90,
        resizeMode: 'contain'
    },

    Text: {
       marginVertical: 5
    },

    Header:{
        fontWeight: "bold"
    }
  });

export default ListItem;