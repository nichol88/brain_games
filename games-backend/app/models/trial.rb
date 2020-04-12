class Trial < ApplicationRecord
  belongs_to :game
  belongs_to :player, optional: true
  has_many :turns

  def populate_turns(num_cell_choices)
    available_assets = self.game.assets.pluck(:id)
    available_positions = num_cell_choices

    max_turns.times do
      self.turns.build(
        grid_position: rand(available_positions),
        asset_id: available_assets.sample
      ).save
    end
    turns
  end
end
