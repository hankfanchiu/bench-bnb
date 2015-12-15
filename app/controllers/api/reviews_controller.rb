class Api::ReviewsController < ApplicationController
  def create
    bench = Bench.find(params[:bench_id])
    @review = bench.reviews.create!(review_params)

    render :show
  end

  private

  def review_params
    params.require(:review).permit(:body, :score)
  end
end
