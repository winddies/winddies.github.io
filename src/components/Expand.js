import React, { Component } from 'react';
import Header from './Header'
export default class Expand extends Component {
	
	constructor(props) {
	    super(props);	    
  	}
	render() {
		return (
			<div>
				<Header page={this.props.location.pathname} /> 
				<div className="expand_content">
					<p>我还没想好这个些什么，写点扩展的东西吧，你有什么好的想法？</p>
				</div>
			</div>
		)	
	}
}