// Include React
var React = require("react");
var Result = require("./single-result/result");

// Results component
var Results = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="card">
          <h3 className="card-header">Results</h3>
          <div className="card-block">          
            <p>You will see results here after you search. Go ahead and search to see.</p>   
              {this.props.results.map(function(element, index) {
                return (
                  <Result key={index} url={element.web_url} title={element.headline.main} publishedDate={element.pub_date}></Result>
                );
              })}
          </div>
        </div>
      </div>
    );
  } 
});

module.exports = Results;
