import React, { Component } from 'react';
import {Link} from 'react-router'
import Header from './Header'
import Tag from './Tag'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import ContentList from './ContentList.js'
import * as action from '../action/actionCreator.js'

var category = function(){
	
	class Category extends Component {

		constructor(props){
			super(props)
			this.tagData =this.props.tag
			//console.log(props)

		}
		componentDidMount(){
			this.props.ajax()
		}
		componentWillMount(){
			console.log("123")
			this.tagData=this.tagData.map(function(item,index){
				return <Tag value={item} key={index} indexValue={index}/>
			})
		}
		componentWillUnmount(){
			console.log("category卸载")
		}
		render() {
			let {item}=this.props;
			return (
				<div>
					<Header page={this.props.location.pathname} />
					<div className="mainContent">
						<div className='category_tags'>
							<div className='rightMenu'>
								<div className="tagContent">
									<h3>Tags</h3>
									{this.tagData}
								</div>
							</div>
						</div>
						<div className='category_content'>
							<ContentList/>
						</div>					
					</div>
				</div>
			)		
		}
	}
	return Category
}
const mapDispatchToProps = (dispatch,props)=>{
	//console.log(action)
	return bindActionCreators(action,dispatch)
}
export default connect((state)=>{console.log(state);return {tag:state.fetchData.tags,item:state.fetchData.item}},mapDispatchToProps)(category())

