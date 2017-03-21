
import React, { Component } from 'react'
import Article from './Article'

export default class Section extends Component {	
	constructor(props) {
	    super(props);
	    this.data=''    
  	}
  	componentWillMount(){
		
  	}
	render() {
		let info =this.props.item.data;
		info=info.length?info.map(function(value,index){
			return <Article data={value} key={index} />
		}):"";
		return (
			<div className="section">
				<div>
					<h3><span>#</span>{this.props.item.topic}</h3>
				</div>
				<div>
					{info}
				</div>				
			</div>
		)	
	}
}