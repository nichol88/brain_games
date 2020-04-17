class PlayersController < ApplicationController
  def show
    player = Player.find(params[:id])
    render json: player
  end

  private

  def player_params
    params.require(:player).permit(:username)
  end
end
