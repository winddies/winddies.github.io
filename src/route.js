import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';


const historyParam = useRouterHistory(createHashHistory)({ queryKey: false })

const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/HomePage').default)
      }, 'HomePage')
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Main').default)
    }, 'Main')
  }
  // childRoutes: [
  //   require('./routes/baidu'),
  //   require('./routes/404'),
  //   require('./routes/redirect')
  // ]
}



export default class Root extends Component {

    render() {
        return <Router history = {historyParam} routes = {rootRoute} />
    }

}