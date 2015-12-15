json.extract! @bench, :id, :description, :lat, :lng, :seating, :score

json.reviews @reviews do |review|
  json.extract! review, :id, :bench_id, :body, :score
end
