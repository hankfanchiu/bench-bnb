var React = require("react"),
    BenchStore = require("../stores/bench"),
    MarkerStore = require("../stores/marker"),
    Bench = require("./bench");

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
    var marker;
    var markers = MarkerStore.all();

    var benchIndexItems = this.state.benches.map(function (bench) {
      marker = markers[bench.id];

      return <Bench key={ bench.id } bench={ bench } marker={ marker } />;
    });

    return benchIndexItems;
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
