import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Header extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount(){

	}
	render() {
		return (
			<div>
				<div className='header'>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/category'>category</Link></li>
						<li><Link to='/expand'>expand</Link></li>
					</ul>
					<div className="title">
						<h1>My Blog</h1>
						<span>一心想过自由生活</span>
					</div>
				</div>

			</div>
		)		
	}
}