import React, { Component } from 'react';

export default class Tag extends Component {
	
	constructor(props) {
	    super(props);
	    //console.log(props)	    
  	}
	render() {
		return (
			<a className="tag" href='#'>{this.props.value}</a>
		)	
	}
}