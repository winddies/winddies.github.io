
var fetchData =(state=initial(),action)=>{
	switch(action.type){
		case 'ajax': return Object.assign({},state,{items:action.post});break;
		default: return state 
	}
}
function initial(){
	return {
		tags:['前端小记','生活小事','交互设计','插件','React','Vue','DOM','2017我在上海','这个标签留给你～'],
		items:[]
	}
}
export default{fetchData}