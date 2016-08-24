var React = require('react');
var ReactDOM = require('react-dom');


var Article = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    handleArticleDelete: function() {
        var id = this.props.id;
        this.props.onArticleDelete({id : id});
    },
    render: function() {
        return (
            <div className="article">
                <h2 className="articleTitle">
                    {this.props.title}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
                <button onClick={this.handleArticleDelete}>削除</button>
                <hr />
            </div>
        );
    }
});

var ArticleBox = React.createClass({
    handleArticleDelete: function(article) {
        this.setState({data: ''});
        $.ajax({
            url: this.props.url + '/' + article.id,
            type: 'DELETE',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    loadArticlesFromServer: function() {
        $.ajax({
            url: this.props.url ,
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleArticleSubmit: function(article) {
        var articles = this.state.data;
        article.now = Date.now();
        var newArticles = articles.concat([article]);
        this.setState({data: newArticles});
        $.ajax({
            url: this.props.url,
            type: 'POST',
            data: article,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data: articles});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadArticlesFromServer();
        setInterval(this.loadArticlesFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="articleBox">
                <h1>Articles</h1>
                <hr />
                <ArticleForm onArticleSubmit={this.handleArticleSubmit} />
                <hr />
                <hr />
                <ArticleList data={this.state.data} onArticleDelete={this.handleArticleDelete} />
            </div>
        );
    }
});

var ArticleList = React.createClass({
    render: function() {
        var onArticleDelete = this.props.onArticleDelete;
        var articleNodes = this.props.data.map(function(article) {
            return (
                <Article title={article.title} key={article.now} id={article.id} onArticleDelete={onArticleDelete} >
                    {article.story}
                </Article>
            );
        });

        return (
            <div className="articleList">
                {articleNodes}
            </div>
        );
    }
});

var ArticleForm = React.createClass({
    getInitialState: function() {
        return {title: '', story: ''};
    },
    handleTitleChange: function(e) {
        this.setState({title: e.target.value});
    },
    handleStoryChange: function(e) {
        this.setState({story: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var title = this.state.title.trim();
        var story = this.state.story.trim();
        if (!story || !title) {
            return;
        }
        this.props.onArticleSubmit({title: title, story: story});
        this.setState({title: '', story: ''});
    },
    render: function() {
        return (
            <form className="articleForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <br />
                <textarea
                    placeholder="Say something..."
                    value={this.state.story}
                    onChange={this.handleStoryChange}
                />
                <br />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

ReactDOM.render(
    <ArticleBox url="../api/article" pollInterval={2000} />,
    document.getElementById('content')
);