class CreateTurns < ActiveRecord::Migration[6.0]
  def change
    create_table :turns do |t|
      t.integer :trial_id
      t.integer :player_id
      t.integer :grid_position
      t.integer :audio_element_id

      t.timestamps
    end
  end
end
