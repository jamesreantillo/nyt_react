// Include React
var React = require("react");
// Helpers for AJAX requests to NYT API
var helpers = require("../../utils/helper");

var Result = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', publishedDate: ''};
    },
    // Saves article
    handleSave: function(event){
        event.preventDefault();
        var article = {
            title: this.state.title,
            url: this.state.url,
            date: this.state.publishedDate
        };
        helpers.addArticle(article);
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, publishedDate:this.props.publishedDate});
    },
    render: function(){
        return (
            <div>
                <p><a href={this.state.url} target="_blank">{this.state.title}</a></p>
                <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
                <hr />
            </div>
        );
    }
});

module.exports = Result;