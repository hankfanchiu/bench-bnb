var React = require("react"),
    ReactDOM = require("react-dom"),
    ApiUtil = require("./util/api_util"),
    Search = require("./components/search");

var content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Search />, content);
});
