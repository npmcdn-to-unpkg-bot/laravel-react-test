import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'


class NavLink extends React.Component {
    render() {
        return <Link {...this.props} activeClassName={"active"} />
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>Home</div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Markdown Articles</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/write">Write</NavLink></li>
                    <li><NavLink to="/articles">Articles</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        )
    }
}

class Write extends React.Component {
    render() {
        return <div>Write</div>
    }
}

class Articles extends React.Component {
    render() {
        return (
            <div>
                <h2>Articles</h2>
                <ul>
                    <li><NavLink to="/articles/article1">Article1</NavLink></li>
                    <li><NavLink to="/articles/article2">Article2</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class Article extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.params.id}</h2>
            </div>
        )
    }
}

render((
    <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route name="write" path="/write" component={Write} />
            <Route name="articles" path="/articles" component={Articles}>
                <Route name="article" path="/articles/:id" component={Article} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))