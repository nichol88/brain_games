class TrialsController < ApplicationController
  def index
    trials = Trial.all
    render json: trials
  end

  def show
    set_trial
    render json: @trial
  end

  def create
    trial = Trial.create(trial_params)
    trial.populate_turns(9)
    render json: trial
  end

  def update
    set_trial
    @trial.update(trial_params)
    render json: @trial
  end

  private

  def set_trial
    @trial = Trial.find(params[:id])
  end

  def trial_params
    params.require(:trial).permit(:game_id, :player_id, :max_turns, :n_number, :score)
  end
end
