var React = require("react"),
    BenchStore = require("../stores/bench"),
    ApiUtil = require("../util/api_util");

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    this.listenerToken = BenchStore.addListener(this._benchesChanged);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _benchesChanged: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    return (
      <div>Hello</div>
    );
  }
});

module.exports = Index;
