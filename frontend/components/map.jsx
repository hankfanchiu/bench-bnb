var React = require("react"),
    ReactDOM = require("react-dom"),
    ApiUtil = require("../util/api_util"),
    MarkerStore = require("../stores/marker");

var Map = React.createClass({
  getInitialState: function () {
    return { markers: MarkerStore.all() };
  },

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.addMapListener();
    this.listenerToken = MarkerStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    this.clearMarkers();
    this.setState({ markers: MarkerStore.all() });
    this.addMarkers();
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

  clearMarkers: function () {
    this.state.markers.forEach(function (marker) {
      marker.setMap(null);
    });
  },

  addMarkers: function () {
    var map = this.map;

    this.state.markers.forEach(function (marker) {
      marker.setMap(map);
    });
  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = Map;
