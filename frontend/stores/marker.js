var Store = require("flux/utils").Store,
    AppDispatcher = require("../dispatcher/dispatcher"),
    BenchConstants = require("../constants/bench_constants");

var _markers = [];
var MarkerStore = new Store(AppDispatcher);

MarkerStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetMarkers(payload.benches);
      break;
  };
};

MarkerStore.all = function () {
  return _markers.slice();
};

var resetMarkers = function (benches) {
  _markers = [];

  benches.forEach(function (bench) {
    _markers.push(createMarker(bench));
  });

  MarkerStore.__emitChange();
};

var createMarker = function (bench) {
  var pos = new google.maps.LatLng(bench.lat, bench.lng);
  var marker = new google.maps.Marker({position: pos});

  return marker;
};

module.exports = MarkerStore;
