var Store = require("flux/utils").Store,
    AppDispatcher = require("../dispatcher/dispatcher");
    BenchConstants = require("../constants/bench_constants");

var _filterParams = {};
var FilterParams = new Store(AppDispatcher);

FilterParams.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BOUNDS_FILTER_RECEIVED:
      updateBounds(payload.bounds);
      break;
    case BenchConstants.MIN_SEATS_FILTER_RECEIVED:
      updateSeats("minSeats", payload.minSeats);
      break;
    case BenchConstants.MAX_SEATS_FILTER_RECEIVED:
      updateSeats("maxSeats", payload.maxSeats);
      break;
  }
};

FilterParams.params = function () {
  var filterParamsCopy = {};

  filterParamsCopy.bounds = _filterParams.bounds;
  filterParamsCopy.minSeats = _filterParams.minSeats || 1
  filterParamsCopy.maxSeats = _filterParams.maxSeats || 9

  return filterParamsCopy;
};

var updateBounds = function (bounds) {
  _filterParams.bounds = bounds;

  FilterParams.__emitChange();
};

var updateSeats = function (type, seats) {
  _filterParams[type] = seats;

  FilterParams.__emitChange();
};

module.exports = FilterParams;
