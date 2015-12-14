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

    this.addMapListeners();
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

  addMapListeners: function () {
    google.maps.event.addListener(this.map, "idle", this.listenForIdle);
    google.maps.event.addListener(this.map, "click", this.listenForClick);
  },

  listenForIdle: function (e) {
    ApiUtil.fetchBenches(this.getBounds());
  },

  listenForClick: function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    var coords = {lat: lat, lng: lng};

    this.props.clickMapHandler(coords);
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
    var markers = this.state.markers;

    Object.keys(markers).forEach(function (id) {
      markers[id].setMap(null);
    });
  },

  addMarkers: function () {
    var map = this.map;
    var markers = this.state.markers;

    Object.keys(markers).forEach(function (id) {
      markers[id].setMap(map);
    });
  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = Map;
