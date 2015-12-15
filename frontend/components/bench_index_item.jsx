var React = require("react"),
    History = require("react-router").History;

var BenchIndexItem = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { isHovering: false };
  },

  handleMouseOver: function (e) {
    this.props.marker.setAnimation(google.maps.Animation.BOUNCE);
    this.setState({ isHovering: true });
  },

  handleMouseOut: function (e) {
    this.props.marker.setAnimation(null);
    this.setState({ isHovering: false });
  },

  handleClick: function (e) {
    var url = "benches/" + this.props.bench.id;
    this.history.pushState(null, url, {});
  },

  render: function () {
    var cls = (this.state.isHovering ? "bench hover" : "bench");

    return (
      <li className={ cls }>
        <a onClick={ this.handleClick }
          onMouseOver={ this.handleMouseOver }
          onMouseOut={ this.handleMouseOut }>

          { this.props.bench.description }
        </a>
      </li>
    );
  }
});

module.exports = BenchIndexItem;
