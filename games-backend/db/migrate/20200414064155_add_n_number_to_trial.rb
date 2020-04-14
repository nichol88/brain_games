class AddNNumberToTrial < ActiveRecord::Migration[6.0]
  def change
    add_column :trials, :n_number, :integer
  end
end
