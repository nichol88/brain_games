# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nback = Game.create(title: 'Dual n-Back')

letter = 'a'

26.times do
  nback.assets.build(file_type: 'audio', file_path: "/sounds/#{letter}.wav", name: letter).save
  letter = letter.succ
end
letter = 'a'
player = Player.create(username: 'SolidSnake')

trial_1 = nback.trials.build(player: player, max_turns: 24).save

24.times do
  trial_1.turns.build(grid_position: (rand(8)+1), asset: Asset.find_by(name: letter)).save
  letter = letter.succ
end
