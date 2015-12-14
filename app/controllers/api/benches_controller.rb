class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.filtered(*filter_params)
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render json: @bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

  def filter_params
    [params[:bounds], params[:minSeats], params[:maxSeats]]
  end
end
