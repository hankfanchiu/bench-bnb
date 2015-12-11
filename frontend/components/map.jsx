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

    this.addMapListener();
    this.listenerToken = BenchStore.addListener(this._benchesChanged);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _benchesChanged: function () {
    BenchStore.all().forEach(this.addBenchMarker);
  },

  addMapListener: function () {
    google.maps.event.addListener(this.map, "idle", this.listenForIdle);
  },

  listenForIdle: function () {
    ApiUtil.fetchBenches(this.getBounds());
  },

  getBounds: function () {
    var latLngBounds = this.map.getBounds();
    var northEastLatLng = latLngBounds.getNorthEast();
    var southWestLatLng = latLngBounds.getSouthWest();

    return {
      northEast: {
        lat: northEastLatLng.lat(),
        lng: northEastLatLng.lng()
      },
      southWest: {
        lat: southWestLatLng.lat(),
        lng: southWestLatLng.lng()
      }
    };
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
