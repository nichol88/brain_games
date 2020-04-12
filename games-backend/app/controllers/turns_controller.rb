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

  end

  private

  def turn_params
    params.require(:turn).permit(:trial_id, :grid_position, :asset_id, :user_selected_audio, :user_selected_position)
  end
end
