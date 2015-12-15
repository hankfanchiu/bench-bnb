var Store = require("flux/utils").Store,
    AppDispatcher = require("../dispatcher/dispatcher"),
    BenchConstants = require("../constants/bench_constants");

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      break;
    case BenchConstants.BENCH_RECEIVED:
      addBench(payload.bench);
      break;
    case BenchConstants.REVIEW_RECEIVED:
      addReviewToBench(payload.review);
      break;
  };
};

BenchStore.all = function () {
  return _benches.slice();
};

BenchStore.find = function (id) {
  return _benches.find(function (bench) {
    return bench.id === id;
  });
};

var resetBenches = function (benches) {
  _benches = benches;
  BenchStore.__emitChange();
};

var addBench = function (bench) {
  var index = findBench(bench.id);

  if (index !== -1) {
    _benches[index] = bench;
  } else {
    _benches.push(bench);
  }

  BenchStore.__emitChange();
};

var addReviewToBench = function (review) {
  var bench_index = findBench(review.bench_id);
  var bench_reviews = _benches[bench_index].reviews;

  bench_reviews[review.id] = review;

  BenchStore.__emitChange();
};

var findBench = function (id) {
  var index = _benches.findIndex(function (possibleBench) {
    return possibleBench.id === id;
  });

  return index;
};

module.exports = BenchStore;
