var ApiActions = require("../actions/api_actions");

var ApiUtil = {
  fetchBenches: function (bounds) {
    $.get("/api/benches", { bounds: bounds }, function (benches) {
      ApiActions.receiveAll(benches);
    });
  }
};

module.exports = ApiUtil;
