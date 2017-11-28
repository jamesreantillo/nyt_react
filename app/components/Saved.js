// Include React
var React = require("react");
//Helper which makes AJAX requests to the NYT API
var helper = require("./utils/helper");
var SingleSaved = require("./single-saved/SingleSaved");

var Saved = React.createClass({
    getInitialState: function () {
    return {saved: []};
  },
// gets saved articles from db
componentDidMount: function() {
    helper.getSavedArticles().then(function(response) {
        this.setState({saved: response.data});
    }.bind(this)).catch(function(error) {
        console.log(error);
    });
},
// updates dom after deleting
showAfterDelete: function(){
    helper.getSavedArticles().then(function(response) {
        this.setState({saved: response.data});
    }.bind(this)).catch(function(error) {
        console.log(error);
    });
},
    render: function () {
        return (
            <div>
                <p>Here you will see any articles that have been saved. No articles? Go ahead and search and save.</p>
            {this.state.saved.map(function(element, i) {
                return (
                    <SingleSaved key={i} id={element._id} url={element.url} title={element.title} date={element.date} showAfterDelete={this.showAfterDelete}/>
                );
            }, this)}
            </div>            
        );
    }
});

module.exports = Saved;
