var React = require("react"),
    ReactDOM = require("react-dom"),
    ApiUtil = require("./util/api_util");

var Search = require("./components/search");

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Search />, document.getElementById("content"));
});
