var React = require("react"),
    FilterActions = require("../actions/filter_actions");

var SeatingFilter = React.createClass({
  seatingOptions: function () {
    var minSeatingOptions = [];
    for (var num = 1; num < 10; num++) {
      minSeatingOptions.push(
        <option value={ num } key={ num }>{ num }</option>
      );
    };

    return minSeatingOptions;
  },

  handleSubmit: function (e) {
    e.preventDefault();
  },

  handleMinSeatsChange: function (e) {
    var minSeats = e.target.value;
    FilterActions.receiveMinSeats(minSeats);
  },

  handleMaxSeatsChange: function (e) {
    var maxSeats = e.target.value;
    FilterActions.receiveMaxSeats(maxSeats);
  },

  render: function () {
    return (
      <form className="filter-seating" onSubmit={ this.handleSubmit }>

        <label htmlFor="min-seats">Min. Seats</label>
        <select name="minSeats"
          id="min-seats"
          defaultValue="1"
          onChange={ this.handleMinSeatsChange }>

          { this.seatingOptions() }

        </select>

        <label htmlFor="max-seats">Max. Seats</label>
        <select name="maxSeats"
          id="max-seats"
          defaultValue="9"
          onChange={ this.handleMaxSeatsChange }>

          { this.seatingOptions() }

        </select>

      </form>
    );
  }
});

module.exports = SeatingFilter;
