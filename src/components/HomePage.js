import React, { Component } from 'react';
import {Link} from 'react-router'
import Header from './Header'
import Tag from './Tag'
import { connect } from 'react-redux';
var homes = function(){
	class Home extends Component {
		constructor(props){
			super(props)
			this.tagData = this.props.tag
		}
		componentWillMount(){
			
			console.log("123")
			this.tagData=this.tagData.map(function(item,index){
				return <Tag value={item} key={index} indexValue={index}/>
			})
		}
		componentWillUnmount(){
			console.log("home卸载")
		}
		render() {
			return (
				<div>
					<Header page={this.props.location.pathname} />
					<div className="mainContent">
						<div className='content'>
							<div>
								<h2>introduces：</h2>
							</div>
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp;这个博客的首页大概就是这样子，大概前端工作者都会有自己想建一个博客的想法，现有的博客系统如wordpress等可以提供很多的个人博客建立功能，但是最近在学react，就想还是自己动手建立一个网站吧，于是my blog就诞生了，设计的很粗糙，做了简单的手机适配
							</p>
						</div>
						<div className='right'>
							<div className='rightMenu'>
								<div className="tagContent">
									<h3>Tags</h3>
									{this.tagData}
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
export default connect((state)=>{console.log(state);return {tag:state.fetchData.tags}})(homes())


