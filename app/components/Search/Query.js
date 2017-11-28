// Include React
var React = require("react");
// Query Component
var Query = React.createClass({
getInitialState: function(){
        return {
            query: "",
            "startYear": "",
            "endYear": "",
        };
    },
    // Event handler function on term change
    handleTerm: function(event) {
        this.setState({ query: event.target.value});
    },
    // Event handler function on term change
    handleStartYear: function(event) {
        this.setState({ startYear: event.target.value});
    },
    // Event handler function on term change
    handleEndYear: function(event) {
        this.setState({ endYear: event.target.value});
    },
    // Event handler function on submit. prevent page from submitting HTML form on accident. default behavior
    handleSubmit: function(event) {
        event.preventDefault();
        // Pass on the queryTerm, start and end years to parent (ie. Search Component)
        this.props.runSearch(this.state.query, this.state.startYear, this.state.endYear);
        // reset the parameters
        this.setState({ query: "", startYear: "", endYear: ""});
    },
    // Render Component
  render: function() {
    return (
        
      <div className="container">
      <div className="card">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="query-term">Search</label>
                <input value={this.state.query} type="text" className="form-control" id="query-term" placeholder="Type any topic" onChange={this.handleTerm} required/>
            </div>
            <div className="form-group">
                <label htmlFor="start-year">Start Year (YYYY)</label>
                <input value={this.state.startYear} type="text" className="form-control" id="start-year" placeholder="" onChange={this.handleStartYear} required/>
            </div>
            <div className="form-group">
                <label htmlFor="end-year">End Year (YYYY)</label>
                <input value={this.state.endYear} type="text" className="form-control" id="end-year" placeholder="" onChange={this.handleEndYear} required/>
            </div>
            <button type="submit" className="btn btn-success">Search</button>
        </form>
        <hr />
      </div>
      </div>
    );
  }
});

module.exports = Query;
