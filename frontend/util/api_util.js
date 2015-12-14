var ApiActions = require("../actions/api_actions");

var ApiUtil = {
  fetchBenches: function (params) {
    $.get("/api/benches", params, function (benches) {
      ApiActions.receiveBenches(benches);
    });
  },

  createBench: function (bench) {
    $.post("/api/benches", {bench: bench}, function (bench) {
      ApiActions.receiveNewBench(bench);
    });
  }
};

module.exports = ApiUtil;
