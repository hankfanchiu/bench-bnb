var React = require("react"),
    LinkedStateMixin = require("react-addons-linked-state-mixin"),
    ApiUtil = require("../util/api_util");


var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { body: "", score: "" };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var review = {body: this.state.body, score: this.state.score};

    ApiUtil.createReview(review);
  },

  render: function () {
    return (
      <form className="review-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="review-body">Description</label>
        <textarea valueLink={ this.linkState("body") }></textarea>

        <label htmlFor="review-score">Score</label>
        <select id="review-score"
          valueLink={ this.linkState("score") }>

          <option></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
    );
  }
});

module.exports = ReviewForm;