import React, { Component } from 'react';
import { FlatList, RefreshControl } from "react-native";
import Post from '../presentation/index.js';

class PostFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        };
      }

      _onRefresh = () => {
        this.setState({refreshing: true});
        fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }

    _renderPost({item}) {
        return <Post item={item}/>;
    }

    _returnKey(item) {
        return item.toString();
    }
    render() {
        return <FlatList
            data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} 
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
            refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
        />;
            
        
    }
}
export default PostFeed;