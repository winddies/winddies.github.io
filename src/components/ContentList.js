
import React, { Component } from 'react';
import Section from './Section'
import {connect} from 'react-redux'
class ContentList extends Component {	
	constructor(props) {
	    super(props);
	    this.data=''    
  	}
  	
	render() {
		this.data=this.props.item.length? this.props.item.map(function(value,index){
			return <Section item={value} key={index} />
		}):"";
		return (
			<div className="contentList">
				{this.data}
			</div>
		)	
	}
}

export default connect((state)=>{return {item:state.fetchData.items}})(ContentList)