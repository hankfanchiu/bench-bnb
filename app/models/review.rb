class Review < ActiveRecord::Base
  validates :body, :score, presence: true

  belongs_to :bench
end
