class AddScoreToTrials < ActiveRecord::Migration[6.0]
  def change
    add_column :trials, :score, :integer
  end
end
