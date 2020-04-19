class GamesController < ApplicationController
  def index
    games = Game.all
    render json: games, except: [:created_at, :updated_at]
  end

  def show
    set_game
    render json: @game
  end

  private

  def game_params
    params.require(:game).permit(:title, :id)
  end

  def set_game
    @game = Game.find(params[:id])
  end
end
