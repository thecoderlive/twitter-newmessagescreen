import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.profile_pic}
    source={{uri: item.profile_pic}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.pseudonym}>{item.pseudonym}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'profile_pic': {
        'width': '10vw',
        'height': '10vw',
        'marginTop': 5,
        'marginLeft': 24,
        'borderRadius': 50
    },
    'user_name': {
        'color': '#0b0909',
        'fontSize': 16,
        'fontWeight': '600',
        'paddingTop': 5,
        'marginLeft': 24
    },
    'pseudonym': {
        'color': '#868383',
        'fontSize': 14,
        'fontWeight': '400',
        'paddingTop': 5,
        'marginLeft': 24,
        'marginBottom': 10
    }
});