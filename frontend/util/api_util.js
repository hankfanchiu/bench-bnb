var ApiActions = require("../actions/api_actions");

var ApiUtil = {
  fetchBenches: function () {
    $.get("/benches", {}, function (benches) {
      ApiActions.receiveAll(benches);
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
