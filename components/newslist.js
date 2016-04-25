import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
var REQUEST_URL = 'http://new3band.com/web/newslist?text=0&page=0&rows=10';
import NewsItem from './NewsItem';
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
			  正在加载新闻列表...
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
        	renderRow={newTemp => <NewsItem newsItem={newTemp}/>}
        	style={styles.listView}
		/>
		);
	}
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  listView:{
	  
  }
});