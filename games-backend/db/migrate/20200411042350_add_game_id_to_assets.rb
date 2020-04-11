class AddGameIdToAssets < ActiveRecord::Migration[6.0]
  def change
    add_column :assets, :game_id, :integer
  end
end
