var AppDispatcher = require("../dispatcher/dispatcher"),
    BenchConstants = require("../constants/bench_constants");

var ApiActions = {
  receiveBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  },

  receiveBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  },

  receiveReview: function (review) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.REVIEW_RECEIVED,
      review: review
    });
  }
};

module.exports = ApiActions;
