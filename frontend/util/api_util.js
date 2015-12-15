var ApiActions = require("../actions/api_actions");

var ApiUtil = {
  fetchBenches: function (params) {
    $.get("/api/benches", params, function (benches) {
      ApiActions.receiveBenches(benches);
    });
  },

  fetchBench: function (id) {
    $.get("/api/benches/" + id, {}, function (bench) {
      ApiActions.receiveBench(bench);
    });
  },

  createBench: function (bench) {
    $.post("/api/benches", {bench: bench}, function (bench) {
      ApiActions.receiveBench(bench);
    });
  },

  createReview: function (review) {
    $.post("/api/reviews", {review: review}, function (review) {
      ApiActions.receiveReview(review);
    });
  }
};

module.exports = ApiUtil;
