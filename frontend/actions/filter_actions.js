var AppDispatcher = require("../dispatcher/dispatcher"),
    BenchConstants = require("../constants/bench_constants");

var FilterActions = {
  receiveBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BOUNDS_FILTER_RECEIVED,
      bounds: bounds
    });
  },

  receiveMinSeats: function (minSeats) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.MIN_SEATS_FILTER_RECEIVED,
      minSeats: minSeats
    });
  },

  receiveMaxSeats: function (maxSeats) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.MAX_SEATS_FILTER_RECEIVED,
      maxSeats: maxSeats
    });
  }
};

module.exports = FilterActions;
