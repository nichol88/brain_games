nback = Game.find_or_create_by(title: 'Dual n-Back')

audio_asset_names = ['B','C','H','K','L','O','Q','R','T','Y']

audio_asset_names.each do |letter|
  nback.assets.build(
    name: letter,
    file_type: 'audio',
    file_path: "/sounds/#{letter}.ogg"
  ).save
end

## uncomment below for test seeds
#nback = Game.find_or_create_by(title: 'Dual n-Back')
# # create audio assets
# letter = 'a'
# 26.times do
#   nback.assets.build(file_type: 'audio', file_path: "/sounds/#{letter}.wav", name: letter).save
#   letter = letter.succ
# end
#
# # Create player
# player = Player.create(username: 'SolidSnake')
#
# # Create trials
# 5.times do
#   trial = nback.trials.build(player: player, max_turns: 24)
#   trial.save
#   letter = 'a'
#   24.times do
#     #binding.pry
#     trial.turns.build(
#       grid_position: (rand(8)+1),
#       #asset: Asset.find_or_create_by(name: letter),
#       user_selected_audio: true,
#       user_selected_position: true
#     ).save
#     letter = letter.succ
#   end
# end
