
import React, { Component } from 'react';

export default class Article extends Component {	
	constructor(props) {
	    super(props);
	    this.data=''    
  	}
  	componentWillMount(){
		
  	}
	render() {
		return (
			<div className="article">
				<div className='title'>
					<h4>{this.props.data.title}</h4>
				</div>
				<div className='introduces'>
					{this.props.data.introduces}
				</div>				
			</div>
		)	
	}
}