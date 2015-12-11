var Store = reqire("flux/util").Store,
    AppDispatcher = require("../dispatcher/dispatcher"),
    BenchConstants = require("../constants/bench_constants");

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      break;
  };
};

BenchStore.all = function () {
  return _benches.slice();
};

var resetBenches = function (benches) {
  _benches = benches;
  BenchStore.__emitChange();
};

window.BenchStore = BenchStore;

module.exports = BenchStore;
