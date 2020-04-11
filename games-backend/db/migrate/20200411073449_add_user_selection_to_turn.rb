class AddUserSelectionToTurn < ActiveRecord::Migration[6.0]
  def change
    add_column :turns, :user_selected_position, :boolean
    add_column :turns, :user_selected_audio, :boolean
  end
end
