import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  //It is a lifecycle method
  //auto called after this lifecycle method
  componentWillMount() {
    //initialize a DataSource
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

// add a helper method
renderRow(library) {
//needs to return single library
  return <ListItem library={library} />;
}

//setup ListView
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
    );
  }
}

//to take a global state and mao state to props

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

//connect is a helper
//CONNECT IS A HELPER THAT WILL CONNECT THE COMPONENT TO THE REDUX STORE

//2 step process of connect written above
//connect gets called and it returns a function
// immmediately called function called LibrayList
