var React = require("react"),
    MarkerStore = require("../stores/marker");

var Bench = React.createClass({
  getInitialState: function () {
    return { hover: false };
  },

  toggleHover: function () {
    var marker = this.props.marker;

    if (marker.getAnimation()) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }

    this.setState({ hover: !this.state.hover });
  },

  render: function () {
    var cls = (this.state.hover ? "bench hover" : "bench");

    return (
      <li className={ cls }>
        <a href="#"
          onMouseEnter={ this.toggleHover }
          onMouseLeave={ this.toggleHover }>

          { this.props.bench.description }
        </a>
      </li>
    );
  }
});

module.exports = Bench;
