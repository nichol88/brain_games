class Turn < ApplicationRecord
  belongs_to :trial
  belongs_to :player
  has_one :audio_element
end
