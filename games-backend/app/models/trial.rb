class Trial < ApplicationRecord
  belongs_to :game
  belongs_to :player, optional: true
  has_many :turns

  # Build all turns for this trial based on grid size
  def populate_turns(num_cell_choices)
    # get the :asset_id for all this games assets to sample from
    available_assets = self.game.assets.pluck(:id)
    # for clarity, represent this as all the possible grid positions
    available_positions = num_cell_choices
    # loop this for as many times as we want turns
    self.max_turns.times do
      self.turns.build(
        # generate random position... for now
        grid_position: rand(available_positions),
        asset_id: available_assets.sample
      ).save
    end
    turns
  end
end
