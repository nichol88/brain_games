class RenameTypeColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :assets, :type, :file_type
  end
end
