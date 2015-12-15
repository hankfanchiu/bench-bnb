var React = require("react"),
    BenchStore = require("../stores/bench"),
    BenchMap = require("./bench_map");

var Bench = React.createClass({
  getInitialState: function () {
    return { bench: BenchStore.find(parseInt(this.props.params.id)) };
  },

  render: function () {
    return (
      <div className="bench">
        <BenchMap bench={ this.state.bench } />

        <div>
          <p>
            Description: { this.state.bench.description }
          </p>
          <p>
            Seating: { this.state.bench.seating }
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Bench;
