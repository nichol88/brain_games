class CreateTrials < ActiveRecord::Migration[6.0]
  def change
    create_table :trials do |t|
      t.integer :game_id
      t.integer :player_id
      t.integer :max_turns

      t.timestamps
    end
  end
end
