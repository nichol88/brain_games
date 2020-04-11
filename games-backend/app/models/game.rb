class Game < ApplicationRecord
  has_many :assets
  has_many :trials
end
