var React = require("react"),
    ReactDOM = require("react-dom"),
    ApiUtil = require("../util/api_util"),
    BenchStore = require("../stores/bench");

var Map = React.createClass({
  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.listenForIdle();
    this.listenerToken = BenchStore.addListener(this._benchesChanged);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _benchesChanged: function () {
    BenchStore.all().forEach(this.addBenchMarker);
  },

  listenForIdle: function () {
    google.maps.event.addListener(this.map, "idle", ApiUtil.fetchBenches);
  },

  addBenchMarker: function (bench) {
    var pos = new google.maps.LatLng(bench.lat, bench.lng);

    new google.maps.Marker({position: pos, map: this.map});
  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = Map;
