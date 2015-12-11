class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render json: @bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
