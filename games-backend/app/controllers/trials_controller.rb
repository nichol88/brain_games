class TrialsController < ApplicationController
  def index
    trials = Trial.all
    render json: trials
  end

  def show
    trial = Trial.find(params[:id])
    render json: {trial: trial, turns: trial.turns}
  end

  def create
    trial = Trial.create(trial_params)
    trial.populate_turns(9)
    render json: trial
  end

  private

  def trial_params
    params.require(:trial).permit(:game_id, :player_id, :max_turns)
  end
end
