var React = require("react"),
    ReactDOM = require("react-dom"),
    ApiUtil = require("./util/api_util");

var Index = require("./components/index");

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Index />, document.getElementById("content"));
});
