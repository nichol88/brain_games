class Turn < ApplicationRecord
  belongs_to :trial
  belongs_to :player
  has_one :asset
end
