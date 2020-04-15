class TurnsController < ApplicationController
  def index
    if params[:trial_id]
      turns = Turn.where(trial_id: params[:trial_id])
    else
      turns = Turn.all
    end
    render json: turns
  end

  def show
    set_turn
    render json: @turn
  end

  def update
    set_turn
    if @turn.update(turn_params)
      render json: @turn.trial
    end
  end

  private

  def set_turn
    @turn = Turn.find(params[:id])
  end

  def turn_params
    params.require(:turn).permit(:trial_id, :grid_position, :asset_id, :user_selected_audio, :user_selected_position, :correct_audio_guess, :correct_position_guess)
  end
end
