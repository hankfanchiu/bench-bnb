var React = require("react"),
    ReactDOM = require("react-dom"),
    BenchStore = require("../stores/bench");

var Bench = React.createClass({
  getInitialState: function () {
    return { bench: BenchStore.find(parseInt(this.props.params.id)) };
  },

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var bench = this.state.bench;

    this.map = new google.maps.Map(map, {
      zoom: 13,
      center: {lat: bench.lat, lng: bench.lng},
      disableDefaultUI: true,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
    });
  },

  componentWillUnmount: function () {

  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = Bench;
