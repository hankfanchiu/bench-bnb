var React = require("react"),
    BenchStore = require("../stores/bench"),
    BenchMap = require("./bench_map"),
    ReviewForm = require("./review_form"),
    Reviews = require("./reviews"),
    ApiUtil = require("../util/api_util");

var Bench = React.createClass({
  getInitialState: function () {
    return { bench: this.getStateFromStore() };
  },

  componentDidMount: function () {
    this.listenerToken = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchBench(newProps.params.id);
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.id);

    return BenchStore.find(id);
  },

  _onChange: function () {
    this.setState({ bench: this.getStateFromStore() });
  },

  render: function () {
    var bench = this.state.bench;
    var score;

    if (bench.score) {
      score = "Average score: " + bench.score;
    } else {
      score = "No reviews yet!";
    }

    return (
      <div className="bench">
        <BenchMap bench={ bench } />

        <div className="bench-detail">
          <h2>{ bench.description }</h2>

          <p>
            Seating: { bench.seating }<br/>
            { score }
          </p>
        </div>

        <ReviewForm bench_id={ bench.id } />

        { bench.reviews ? <Reviews reviews={ bench.reviews } /> : "" }
      </div>
    );
  }
});

module.exports = Bench;
