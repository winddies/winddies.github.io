import React, { Component } from 'react';
import {Link} from 'react-router'
import Header from './Header'
import Tag from './Tag'

var homes = function(){
	let tagData = ['前端小记','生活小事','交互设计','插件','React','Vue','DOM','2017我在上海','这个标签留给你～']
	class Home extends Component {
		constructor(props){
			super(props)

		}
		componentWillMount(){
			console.log("123")
			tagData=tagData.map(function(item,index){
				return <Tag value={item} key={index} indexValue={index}/>
			})
		}
		render() {
			return (
				<div>
					<Header page={this.props.params} />
					<div className="mainContent">
						<div className='content'>
							<div>
								<h2>introduces：</h2>
							</div>
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp;这个博客的首页大概就是这样子，大概前端工作者都会有自己想建一个博客的想法，现有的博客系统如wordpress等可以提供很多的个人博客建立功能，但是最近在学react，就想还是自己动手建立一个网站吧，于是my blog就诞生了，目前这个版本有很多需要完善的地方
							</p>
						</div>
						<div className='right'>
							<div className='rightMenu'>
								<div className="tagContent">
									<h3>Tags</h3>
									{tagData}
								</div>
							</div>
						</div>
					</div>
				</div>
			)		
		}
	}
	return Home
}
export default homes()