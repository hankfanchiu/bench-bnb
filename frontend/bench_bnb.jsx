var React = require("react"),
    ReactDOM = require("react-dom"),
    Router = require("react-router").Router,
    Route = require("react-router").Route,
    IndexRoute = require("react-router").IndexRoute,
    App = require("./components/app"),
    Search = require("./components/search");

var router = (
  <Router>
    <Route path="/" component={ App }>
      <IndexRoute component={ Search } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById("content"));
});
