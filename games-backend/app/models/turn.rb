class Turn < ApplicationRecord
  belongs_to :trial
  has_one :asset

end
