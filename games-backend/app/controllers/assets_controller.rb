class AssetsController < ApplicationController
  def index
    #binding.pry
    if params[:game_id]
      assets = Game.find(params[:game_id]).assets
    else
      assets = Asset.all
    end
    render json: assets.to_json(:except => [:updated_at, :created_at])
  end
end
