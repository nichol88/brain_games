# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nback = Game.find_or_create_by(title: 'Dual n-Back')

# create audio assets
letter = 'a'
26.times do
  nback.assets.build(file_type: 'audio', file_path: "/sounds/#{letter}.wav", name: letter).save
  letter = letter.succ
end

# Create player
player = Player.create(username: 'SolidSnake')

# Create trials
5.times do
  trial = nback.trials.build(player: player, max_turns: 24)
  trial.save
  letter = 'a'
  24.times do
    #binding.pry
    trial.turns.build(
      grid_position: (rand(8)+1),
      #asset: Asset.find_or_create_by(name: letter),
      user_selected_audio: true,
      user_selected_position: true
    ).save
    letter = letter.succ
  end
end
