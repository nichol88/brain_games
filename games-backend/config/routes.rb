Rails.application.routes.draw do
  resources :assets
  resources :players
  resources :turns
  resources :trials
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
