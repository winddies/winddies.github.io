import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
	    super(props);	    
  	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)	
	}
}