var React = require("react"),
    ReactDOM = require("react-dom");

var BenchMap = React.createClass({
  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var bench = this.props.bench;

    this.map = new google.maps.Map(map, {
      zoom: 15,
      center: {lat: bench.lat, lng: bench.lng},
      disableDefaultUI: true,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
    });

    this.addMarker();
  },

  componentWillUnmount: function () {

  },

  addMarker: function () {
    var bench = this.props.bench;
    var pos = new google.maps.LatLng(bench.lat, bench.lng);

    new google.maps.Marker({position: pos, map: this.map});
  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = BenchMap;
