// Include React & components
var React = require("react");
//
var Main = React.createClass({
  render: function () {
    // console.log("Render results", this.state.results);
    return (
      <div className="container">
        {/*Navbar*/}
        <nav
          className="navbar navbar-toggleable-md navbar-warning bg-warning fixed-top">
          <a className="navbar-brand" href="#/">NYT Search</a>
            <ul className=" nav navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="#/Saved">Saved Articles</a>
              </li>
            </ul>
        </nav>
        {/*Jumbotron*/}
        <div className="jumbotron">
          <h1 className="display-3">New York Times</h1>
          <p className="lead">Search for any NYT article</p>
          <hr className="my-4"/>
        </div>
        {/*All children of Main ie. Search--query--results--result, Saved--singleSavedArticle*/}
        {this.props.children}

      </div>
    )
  }
});

module.exports = Main;
