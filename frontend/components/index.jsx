var React = require("react"),
    BenchStore = require("../stores/bench"),
    MarkerStore = require("../stores/marker"),
    BenchIndexItem = require("./bench_index_item");

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

  benchIndexItems: function () {
    var markers = MarkerStore.all();

    var benches = this.state.benches.map(function (bench) {
      return (
        <BenchIndexItem key={ bench.id }
          bench={ bench }
          marker={ markers[bench.id] } />
      );
    });

    return benches;
  },

  render: function () {
    return (
      <ul className="index">
        { this.benchIndexItems() }
      </ul>
    );
  }
});

module.exports = Index;
