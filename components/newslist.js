import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
var REQUEST_URL = 'http://new3band.com/web/newslist?text=0&page=0&rows=10';
export default class newslist extends Component {
	constructor(props) {
        super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2']),
			loaded: false
		}
		
    }
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		fetch(REQUEST_URL)
		.then((response) => response.json())
		.then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.list1),
          loaded: true
        });
      })
      .done();
	}
	renderLoadingView() {
		return (
		  <View style={styles.container}>
			<Text>
			  Loading movies...
			</Text>
		  </View>
		);
	}
	render() {
		if(!this.state.loaded) {
			 return this.renderLoadingView();
		}
		return (
		<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderNew}
        style={styles.listView} />
		);
	}
	renderNew(newTemp) {
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
  listView:{
	  
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
	  fontSize:14,
	  fontWeight:'bold',
	  marginBottom:8
  },
  newAbstract: {
	  fontSize:12, 
  }
});