Rails.application.routes.draw do
  resources :assets

  resources :players, shallow: true do
    resources :trials
  end

  resources :turns

  resources :trials do
    resources :turns
  end

  resources :games, shallow: true do
    resources :assets
    resources :trials
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
