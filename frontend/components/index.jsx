var React = require("react"),
    BenchStore = require("../stores/bench");

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    this.listenerToken = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    var benches = this.state.benches.map(function(bench) {
      return (
        <li className="bench" key={ bench.id }>{ bench.description }</li>
      );
    });

    return (
      <ol className="index">{ benches }</ol>
    );
  }
});

module.exports = Index;
