var AppDispatcher = require("../dispatcher/dispatcher"),
    BenchConstants = require("../constants/bench_constants");

var ApiActions = {
  receiveBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  },

  receiveNewBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH_RECEIVED,
      bench: bench
    });
  }
};

module.exports = ApiActions;
