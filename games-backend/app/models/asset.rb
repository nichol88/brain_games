class Asset < ApplicationRecord
  belongs_to :game

  validates :file_path, uniqueness: true
end
