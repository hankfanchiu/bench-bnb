var React = require("react"),
    ReactDOM = require("react-dom"),
    Router = require("react-router").Router,
    Route = require("react-router").Route,
    IndexRoute = require("react-router").IndexRoute,
    App = require("./components/app"),
    Search = require("./components/search"),
    BenchForm = require("./components/bench_form"),
    Bench = require("./components/bench");

var router = (
  <Router>
    <Route path="/" component={ App }>
      <IndexRoute component={ Search } />
      <Route path="benches/new" component={ BenchForm } />
      <Route path="benches/:id" component={ Bench } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById("content"));
});
