var ApiActions = require("../actions/api_actions");

var ApiUtil = {
  fetchBenches: function (bounds) {
    $.get("/api/benches", { bounds: bounds }, function (benches) {
      ApiActions.receiveAll(benches);
    });
  },

  createBench: function (bench) {
    $.post("/api/benches", { bench: bench }, function (bench) {
      ApiActions.receiveNewBench(bench);
    });
  }
};

module.exports = ApiUtil;
