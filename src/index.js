import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Route from './route'
import './index.css'
render(
	<Provider>
		<Route />
	</Provider>,document.getElementById('root'))
