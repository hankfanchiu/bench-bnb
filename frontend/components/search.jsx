var React = require("react"),
    Map = require("./map"),
    Index = require("./index");

var Search = React.createClass({
  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "benches/new", coords)
  },

  render: function () {
    return (
      <div className="search">
        <Map clickMapHandler={ this.clickMapHandler } />
        <Index />
      </div>
    );
  }
});

module.exports = Search;
