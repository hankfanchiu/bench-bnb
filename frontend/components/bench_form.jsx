var React = require("react"),
    ApiUtil = require("../util/api_util"),
    LinkedStateMixin = require("react-addons-linked-state-mixin");

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: "",
      seating: 0
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var bench = {
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description,
      seating: this.state.seating
    };

    ApiUtil.createBench(bench);
    this.resetState();
  },

  resetState: function () {
    this.setState({
      lat: "",
      lng: "",
      description: "",
      seating: 0
    });
  },

  seatingOptions: function () {
    var seatingOptions = [];
    for (var num = 1; num < 10; num++) {
      seatingOptions.push(
        <option value={ num } key={ num }>{ num }</option>
      );
    };

    return seatingOptions;
  },

  render: function () {
    return (
      <form className="bench-form" onSubmit={ this.handleSubmit }>

        <label htmlFor="bench-latitude">Latitude</label>
        <input type="text"
          id="bench-latitude"
          placeholder="Latitude"
          valueLink={ this.linkState("lat") } />

        <label htmlFor="bench-longitude">Longitude</label>
        <input type="text"
          id="bench-longitude"
          placeholder="Longitude"
          valueLink={ this.linkState("lng") } />

        <label htmlFor="bench-seating">Seating</label>
        <select id="bench-seating"
          defaultValue="1"
          valueLink={ this.linkState("seating") }>

          { this.seatingOptions() }
        </select>

        <label htmlFor="bench-description">Description</label>
        <textarea valueLink={ this.linkState("description") }></textarea>

        <input type="submit" name="Submit Bench" />

      </form>
    );
  }
});

module.exports = BenchForm;
