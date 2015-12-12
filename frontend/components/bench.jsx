var React = require("react"),
    MarkerStore = require("../stores/marker");

var Bench = React.createClass({
  getInitialState: function () {
    return { hover: false };
  },

  handleMouseEnter: function () {
    var blueUrl = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    this.props.marker.setIcon(blueUrl);
    this.toggleHover();
  },

  handleMouseLeave: function () {
    var redUrl = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    this.props.marker.setIcon(redUrl);
    this.toggleHover();
  },

  toggleHover: function () {
    this.setState({ hover: !this.state.hover });
  },

  render: function () {
    var cls = (this.state.hover ? "bench" : "bench hover");

    return (
      <li className={ cls }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>

        { this.props.bench.description }

      </li>
    );
  }
});

module.exports = Bench;
