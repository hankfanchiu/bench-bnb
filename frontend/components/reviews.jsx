var React = require("react");

var Reviews = React.createClass({
  reviewList: function () {
    var reviews = this.props.reviews.map(function (review, idx) {
      return (
        <li key={ idx }>
          ({ review.score }): { review.body }
        </li>
      );
    });

    return reviews;
  },

  render: function () {
    return (
      <ul className="reviews">
        { this.reviewList() }
      </ul>
    );
  }
});

module.exports = Reviews;
