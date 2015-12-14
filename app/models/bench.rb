# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seating     :integer          default(1), not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(bounds)
    sw = bounds[:southWest]
    ne = bounds[:northEast]

    self.where(lat: sw[:lat]..ne[:lat])
      .where(lng: sw[:lng]..ne[:lng])
  end
end
