// Dependencies
var React = require("react");
var Query = require("./Search/Query");
var Results = require("./Search/Results");
//helper for axios calls
var helpers = require("./utils/helper");

var Search = React.createClass({
    getInitialState: function () {
        return {results: []};
    },
    // Query passed search info
    runSearch: function (query, startYear, endYear) {
        // Axios helper query
        helpers
            .runQuery(query, startYear, endYear)
            .then(function (data) {
                this.setState({results: data.docs})
            }.bind(this));
    },
    //Render Query and Results
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <Query runSearch={this.runSearch}/>
                </div>
                <div className="row">
                    <Results results={this.state.results}/>
                </div>
            </div>
        )
    }
})

module.exports = Search;