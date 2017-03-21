
function ajax(params){
	//console.log(params)
	return function(dispatch,getState){
		if(shouldSendUrl(getState())){
			return dispatch(fetchUrl(params)) 
		}else{
			return Promise.resolve()
		}
	}
	
}

function initial(){
	return {
		type:'ajax',
		post:[
			{	topic:"前端小记",
				url:'./category/front-end',
				data:[
					{title:"前端的核心竞争力到底是什么？",introduces:"前端其实不是很那么简单"},
					{title:"2017年我应该做点什么了吧",introduces:"有时候不是我们失去了目标，而是失去了方向"},
				]
			},
			{	topic:"这个标签留给你",
				url:'./category/front-end',
				data:[
					{title:"一周年",introduces:"和黄黄同学的一周年要到了。。"},					
				]
			}
		]
	}
}

function fetchUrl(params){

	return (dispatch)=>{
			if(true){
				return dispatch(initial())
			}
		return fetch(url)
			.then(response => response.json())
			.then(json => 
			dispatch(receiveData(json))
			)
			.catch(e => {
			window.location.href = href;
			});
    }
}
function receiveData(json){
	return {
		type:"receiveData",
		post:json
	}
}
function shouldSendUrl(state){
	if(!state){
		return true
	}
	console.log(state)
	return !state.fetchData.items.length
}



export {ajax}