var React = require("react"),
    FilterParams = require("../stores/filter_params"),
    FilterActions = require("../actions/filter_actions"),
    ApiUtil = require("../util/api_util"),
    Map = require("./map"),
    SeatingFilter = require("./seating_filter");
    Index = require("./index");

var Search = React.createClass({
  getInitialState: function () {
    var params = FilterParams.params();

    return {
      bounds: params.bounds,
      minSeats: params.minSeats,
      maxSeats: params.maxSeats
    };
  },

  componentDidMount: function () {
    this.listenerToken = FilterParams.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    var params = FilterParams.params();

    ApiUtil.fetchBenches(params);

    this.setState({
      bounds: params.bounds,
      minSeats: params.minSeats,
      maxSeats: params.maxSeats
    });
  },

  clickMapHandler: function (coords) {
    this.setState({ lat: coords.lat, lng: coords.lng });
    this.props.history.pushState(null, "benches/new", coords);
  },

  render: function () {
    return (
      <div className="search">
        <Map clickMapHandler={ this.clickMapHandler } />

        <SeatingFilter />

        <Index />
      </div>
    );
  }
});

module.exports = Search;
