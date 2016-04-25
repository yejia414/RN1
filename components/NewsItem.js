import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class NewsItem extends Component {
    render() {
        var newTemp = this.props.newsItem;
        return (
            <View style={styles.container}>
                <Image
                    source={{uri:'http://new3band.com/web/image/newsTitleImg?fileName='+newTemp.wzimgurl}}
                    style={styles.img}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={1}>{newTemp.wztitle}</Text>
                    <Text style={styles.newAbstract} numberOfLines={2}>{newTemp.wzabstrace}</Text>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop:8,
        paddingRight:8,
        marginBottom:8,
        paddingLeft:8
    },
    rightContainer: {
        flex: 1,
        marginTop:8,
        marginRight:8,
        marginBottom:8,
        marginLeft:8
    },
    img: {
        width:90,
        height:60
    },
    title: {
        fontSize:15,
        fontWeight:'bold',
        marginBottom:4,
        color:'#000'
    },
    newAbstract: {
        fontSize:14,
        lineHeight:20
    }
});