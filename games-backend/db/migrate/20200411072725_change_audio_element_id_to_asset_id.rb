class ChangeAudioElementIdToAssetId < ActiveRecord::Migration[6.0]
  def change
    rename_column :turns, :audio_element_id, :asset_id
  end
end
