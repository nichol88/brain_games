class AddCorrectChoicesToTurns < ActiveRecord::Migration[6.0]
  def change
    add_column :turns, :correct_audio_guess, :boolean
    add_column :turns, :correct_position_guess, :boolean
  end
end
