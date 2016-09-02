import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Root from './component/Root'
import Counter from './container/Counter'
import Form from './container/Form'

export default class RouteMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route name="root" path="/" component={Root}>
                    <Route name="counter" path="/counter" component={Counter} />
                    <Route name="form" path="/form" component={Form} />
                </Route>
            </Router>
        )
    }
}