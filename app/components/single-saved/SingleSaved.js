// Include React
var React = require("react");
var helper = require("../utils/helper");

var SingleSaved = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', date: '', id: ''};
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, date:this.props.date, id:this.props.id});
    },
    // Deleted article
    handleDelete: function(event){
        event.preventDefault();
        helper.deleteArticle(this.state.id);
        this.props.showAfterDelete();
    },
    render: function(){
        return(
            <div>
                <a href={this.props.url}><h4>{this.props.title}</h4></a>
                <button className="btn btn-warning" onClick={this.handleDelete}>Delete</button>
                <hr />
            </div>
        );
    }
});

module.exports = SingleSaved;